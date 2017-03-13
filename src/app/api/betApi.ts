import {} from "core-js";
import { Injectable } from '@angular/core';
import {} from 'whatwg-fetch';
import { BetModel } from '../model/betModel';
import { CorrectScoreModel } from '../model/correctScore';

let betDataJSON = require('./data/betData.json');


class BetAPI {

  betsModel: Array<BetModel>;

  constructor() {
    // Using Json
    this.betsModel = this.getAllBetsJson();
    // Using url with fetch
    // this.betsModel = this.getAllBetsUrl();
  }

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

    const bets = data.map((bet: BetModel) => {
      var betModel : BetModel = new BetModel();
      betModel.id = bet.id;
      betModel.homeTeam = bet.homeTeam;
      betModel.awayTeam = bet.awayTeam;
      betModel.multiResult = bet.multiResult;
      betModel.dobleChance = bet.dobleChance;
      betModel.correctScoreModel = bet.correctScoreModel.map((correctScoreJson: CorrectScoreModel) => {
        var correctScore : CorrectScoreModel = new CorrectScoreModel();

        correctScore.id = correctScoreJson.id;
        correctScore.localScore = correctScoreJson.localScore;
        correctScore.awayScore = correctScoreJson.awayScore;
        correctScore.rate = correctScoreJson.rate;
        correctScore.selected = correctScoreJson.selected == null ? false: correctScoreJson.selected;

        return correctScore;
      });
      return betModel;
    });

    return bets;
  }

  public changeSelected(betId: number, typeBet: string, betName:string) {
    const index = this.betsModel.findIndex(bet => bet.id === betId);
    var betSelected = this.betsModel.filter(bet => bet.id === betId)[0];
    betSelected[typeBet][betName].selected = true;

    this.betsModel = this.betsModel
    .slice(0, index)
    .concat([betSelected])
    .concat(this.betsModel.slice(index + 1));
  }

  public changeResultScoreSelected(betId, resultScoreId) {
    const index = this.betsModel.findIndex(bet => bet.id === betId);
    const indexResultScore = this.betsModel[index].correctScoreModel
                             .findIndex(resultScore => resultScore.id === resultScoreId);
    var betSelected = this.betsModel[index].correctScoreModel[indexResultScore];
    betSelected.selected = true;

    this.betsModel[index].correctScoreModel = this.betsModel[index].correctScoreModel
    .slice(0, indexResultScore)
    .concat([betSelected])
    .concat(this.betsModel[index].correctScoreModel.slice(indexResultScore + 1));
  }

  public deleteSelected(betId, typeBet, typeRate) {
    const index = this.betsModel.findIndex(bet => bet.id === betId);
    var betDeleted = this.betsModel.filter(bet => bet.id === betId)[0];
    betDeleted[typeBet][typeRate].selected = false;

    this.betsModel = this.betsModel
    .slice(0, index)
    .concat([betDeleted])
    .concat(this.betsModel.slice(index + 1));
  }
}

export const betApi = new BetAPI();
