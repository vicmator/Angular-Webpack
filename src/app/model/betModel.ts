import { MultiResultModel } from './multiResultModel';
import { DobleChanceModel } from './dobleChance';
import { CorrectScoreModel } from './correctScore';

export class BetModel {
  id: number;
  homeTeam: string;
  awayTeam: string;
  multiResult: MultiResultModel;
  dobleChance: DobleChanceModel;
  CorrectScoreModel: CorrectScoreModel[];

  constructor() {
    this.id = -1;
    this.homeTeam = "";
    this.awayTeam = "";
    this.multiResult = new MultiResultModel();
    this.dobleChance = new DobleChanceModel();
    this.CorrectScoreModel = [];
  }
}
