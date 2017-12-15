export default class QuestModel {
  id: number
  timestamp: number
  title: string
  description: string
  difficulty: number
  rewards: string[]
  party: string[]   // TODO: player objects?

  constructor(title: string) {
    this.id = 1;
    this.timestamp = 100;
    this.title = title;
    this.description = 'desc';
    this.difficulty = 0;
    this.rewards = ['reward1', 'reward2'];
    this.party = ['One', 'Two'];
  }
}