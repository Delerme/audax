import { NextFunction, Request, Response, Router } from 'express'
import QuestModel from '../src/quests/QuestModel'

export default class QuestApi {
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

  public static list(req: Request, res: Response, next: NextFunction) {
    let routes: QuestApi = new QuestApi();

    res.json(routes.MOCK_QUESTS);
  }
}