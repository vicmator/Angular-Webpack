export class TypeRate {
  type: string;
  rate: number;
  winRate: number;
  selected:boolean;

  constructor() {
    this.type = "";
    this.rate = 0;
    this.winRate = 0;
    this.selected = false;
  }
}
