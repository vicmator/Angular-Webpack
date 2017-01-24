import { BetModel } from '../model/betModel';
import { Promise } from "core-js";
import { CorrectScoreModel } from '../model/correctScore';

var betDataJSON = require('./betData.json');

export class BetAPI {
  public getBetsJson(): BetModel {
    return this.mapBetsJsonToBetsEntityCollection(betDataJSON);
  }

  private mapBetsJsonToBetsEntityCollection(data): BetModel {
    var betModel : BetModel;

    betModel = {
      id: data.id,
      homeTeam: data.homeTeam,
      awayTeam: data.awayTeam,
      multiResult: data.multiResult,
      dobleChance: data.dobleChance,
      correctScoreModel: data.correctScoreModel.map((correctScoreJson) => {
        var correctScore : CorrectScoreModel = new CorrectScoreModel();

        correctScore.id = correctScoreJson.id;
        correctScore.localScore = correctScoreJson.localScore;
        correctScore.awayScore = correctScoreJson.awayScore;
        correctScore.rate = correctScoreJson.rate;

        return correctScore;
      })
    }

    return betModel;
  }
}

// export const betApi = new BetAPI();
