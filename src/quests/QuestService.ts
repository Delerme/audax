import Axios from 'axios'
import { AxiosResponse } from 'axios'
import QuestModel from './QuestModel'

export default class QuestService {
  MOCK_QUESTS: QuestModel[]
  
  constructor() {
    let quest1 = new QuestModel('The Armlet of Mordigian');
    quest1.description = `Rumors indicate the Armlet of Mordigian lies
      in a buried tomb several leagues south of Waterdeep. History says the tomb
      is home to warriors of a once great army that now rest with many treasures
      from their victories. They may not be keen to anyone who disturbs 
      their slumber...`;
    let quest2 = new QuestModel('Quest 2');
    let quest3 = new QuestModel('Quest 3');

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

  /**
   * Update a signup slot
   */
  async updateQuestParty(id: number, index: number, email:string) {
    try {
      let res: AxiosResponse = await Axios.put(
        `/quests/${id}`,
        { index: index, email: email });
    } catch(err) {
      console.log(err);
    }
  }
}