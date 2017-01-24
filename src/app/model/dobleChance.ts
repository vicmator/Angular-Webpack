import { TypeRate } from './typeRate';

export class DobleChanceModel {
  homeDrawRate: TypeRate;
  homeAwayRate: TypeRate;
  awayDrawRate: TypeRate;

  constructor() {
    this.homeDrawRate = new TypeRate();
    this.homeAwayRate = new TypeRate();
    this.awayDrawRate = new TypeRate();
  }
}
