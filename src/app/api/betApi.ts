import { Promise } from "core-js";
import { Injectable } from '@angular/core';
import {} from 'whatwg-fetch';
import { BetModel } from '../model/betModel';
import { CorrectScoreModel } from '../model/correctScore';

let betDataJSON = require('./data/betData.json');

@Injectable()
export class BetAPI {

  // Using fetch with Url
  public getAllBetsUrl(): Promise<BetModel[]> {
    // If we use url in future
    const betsUrl : string = '';

    return fetch(betsUrl)
      .then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response))
      .then((data) => this.mapBetsJsonToBetsEntityCollection(data));
  }

  // Using JSON file
  public getAllBetsJson(): BetModel[] {
    return this.mapBetsJsonToBetsEntityCollection(betDataJSON);
  }

  private checkStatus(response : Response) : Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response : Response) : any {
    return response.json();
  }

  private mapBetsJsonToBetsEntityCollection(data: any): BetModel[] {

    const bets = data.map((bet) => {
      var betModel : BetModel = new BetModel();
      betModel.id = bet.id;
      betModel.homeTeam = bet.homeTeam;
      betModel.awayTeam = bet.awayTeam;
      betModel.multiResult = bet.multiResult;
      betModel.dobleChance = bet.dobleChance;
      betModel.correctScoreModel = bet.correctScoreModel.map((correctScoreJson) => {
        var correctScore : CorrectScoreModel = new CorrectScoreModel();

        correctScore.id = correctScoreJson.id;
        correctScore.localScore = correctScoreJson.localScore;
        correctScore.awayScore = correctScoreJson.awayScore;
        correctScore.rate = correctScoreJson.rate;

        return correctScore;
      });
      return betModel;
    });

    return bets;
  }
}
