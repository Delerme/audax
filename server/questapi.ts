import { NextFunction, Request, Response, Router } from 'express'
import { Pool } from 'pg'
const isEmail = require('validator/lib/isEmail')

import QuestModel from '../src/quests/QuestModel'

export default class QuestApi {
  // Uses environment variables for connection
  static readonly pool: Pool = new Pool()
  MOCK_QUESTS: QuestModel[]

  public static create(router: Router) {
    router.get("/quests", QuestApi.list);
    router.put("/quests/:id", QuestApi.update);
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

  public static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.body.email;
      const index = req.body.index;
      const id = req.params.id;
      if (!isEmail(email)) {
        res.status(400).end();
      } else {
        const queryResponse = await QuestApi.pool.query(`SELECT party FROM quests
          WHERE id = $1`, [id]);
        const party = queryResponse.rows[0].party.split(',');
        party[index] = email;
        QuestApi.pool.query(
          'UPDATE quests SET party = $1 WHERE id = $2',
          [party.join(','), id]);
        res.end();
      }
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  }

  private static parseQuestModel(model: any): QuestModel {
    const rewards = model.rewards.split(',');
    const party = model.party.split(',');
    model.rewards = rewards;
    model.party = party;
    return model as QuestModel;
  }

  private static serializeQuestModel(model: QuestModel): any {
    const rewards = model.rewards.join(',');
    const party = model.party.join(',');
    const dbModel: any = model;
    dbModel.rewards = rewards;
    dbModel.party = party;
    return dbModel;
  }
}