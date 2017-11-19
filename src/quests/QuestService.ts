import Axios from 'axios'
import { AxiosResponse } from 'axios'
import QuestModel from './QuestModel'

export default class QuestService {
  MOCK_QUESTS: QuestModel[]
  
  constructor() {
    let quest1 = new QuestModel("Quest 1");
    let quest2 = new QuestModel("Quest 2");
    let quest3 = new QuestModel("Quest 3");

    this.MOCK_QUESTS = [quest1, quest2, quest3];
  }

  /**
   * Returns the list of available quests
   */
  async getQuestList(): Promise<QuestModel[]> {
    try {
      let res: AxiosResponse = await Axios.get('/quests');
      return res.data;
    } catch(err) {
      return this.MOCK_QUESTS
    }
  }
}