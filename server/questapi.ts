import { NextFunction, Request, Response, Router } from 'express'
import { Pool } from 'pg'
import QuestModel from '../src/quests/QuestModel'

export default class QuestApi {
  // Uses environment variables for connection
  static readonly pool: Pool = new Pool()
  MOCK_QUESTS: QuestModel[]

  public static create(router: Router) {
    router.get("/quests", QuestApi.list);
  }

  constructor() {
    let quest1 = new QuestModel("Quest 1");
    let quest2 = new QuestModel("Quest 2");
    let quest3 = new QuestModel("Quest 3");

    this.MOCK_QUESTS = [quest1, quest2, quest3];
  }

  public static async list(req: Request, res: Response, next: NextFunction) {
    let routes: QuestApi = new QuestApi();
    try {
      const queryResponse = await QuestApi.pool.query('SELECT * FROM quests');
      res.json(queryResponse.rows.map(QuestApi.parseQuestModel));
    } catch(err) {
      console.log(err);
      res.json(routes.MOCK_QUESTS);
    }
  }

  private static parseQuestModel(model: any): QuestModel {
    const rewards = model.rewards.split(',');
    const party = model.party.split(',');
    model.rewards = rewards;
    model.party = party;
    return model as QuestModel;
  }
}