export default class QuestModel {
  title: string
  description: string
  difficulty: number  // TODO: enum?
  reward: string
  party: string[]   // TODO: player objects?

  constructor(title: string) {
    this.title = title;
    this.description = "desc";
    this.difficulty = 0;
    this.reward = "reward";
    this.party = ["One", "Two"];
  }
}