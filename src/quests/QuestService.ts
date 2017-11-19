import Axios from 'axios'
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
	getQuestList(): QuestModel[] {
		return this.MOCK_QUESTS;
	}
}