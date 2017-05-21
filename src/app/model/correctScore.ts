import { TypeRate } from './typeRate';

export class CorrectScoreModel {
  id: number;
  localScore: number;
  awayScore: number;
  rate: number;
  winRate: number;
  selected:boolean;

  constructor() {
    this.id = -1;
    this.localScore = -1;
    this.awayScore = -1;
    this.rate = -1;
    this.winRate = 0;
    this.selected = false;
  }
}
