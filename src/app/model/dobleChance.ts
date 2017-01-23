import { TypeRate } from './typeRate';

export class DobleChanceModel {
  id: number;
  homeDrawRate: TypeRate;
  homeAwayRate: TypeRate;
  awayDrawRate: TypeRate;

  constructor() {
    this.id = -1;
    this.homeDrawRate = new TypeRate();
    this.homeAwayRate = new TypeRate();
    this.awayDrawRate = new TypeRate();
  }
}
