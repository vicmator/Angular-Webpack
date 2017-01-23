import { TypeRate } from './typeRate';

export class CorrectScoreModel {
  id: number;
  localScore: number;
  awayScore: number;
  rate: number;

  constructor() {
    this.id = -1;
    this.localScore = -1;
    this.awayScore = -1;
    this.rate = -1;
  }
}
