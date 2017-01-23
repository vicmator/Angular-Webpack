import { TypeRate } from './typeRate';

export class MultiResultModel {
  id: number;
  homeRate: TypeRate;
  awayRate: TypeRate;
  drawRate: TypeRate;

  constructor() {
    this.id = -1;
    this.homeRate = new TypeRate();
    this.awayRate = new TypeRate();
    this.drawRate = new TypeRate();
  }
}
