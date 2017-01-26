import { TypeRate } from './typeRate';

export class MultiResultModel {
  homeRate: TypeRate;
  awayRate: TypeRate;
  drawRate: TypeRate;

  constructor() {
    this.homeRate = new TypeRate();
    this.awayRate = new TypeRate();
    this.drawRate = new TypeRate();
  }
}
