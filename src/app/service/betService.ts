import { Promise } from "core-js";
import { Injectable, EventEmitter } from '@angular/core';
import { BetModel } from '../model/betModel';
import { CorrectScoreModel } from '../model/correctScore';
import { betApi } from '../api/betApi';

@Injectable()
export class BetService {
  public betModified$: EventEmitter<BetModel>;

  constructor() {
    this.betModified$ = new EventEmitter();
  }

  public getAllBets(): any {
    return betApi.betsModel;
  }

  public getMultiResultSelectedBets(bets: Array<BetModel>): Array<BetModel> {
    return bets.filter(bet => bet.multiResult.homeRate.selected
                           || bet.multiResult.awayRate.selected
                           || bet.multiResult.drawRate.selected);
  }

  public getDobleChanceSelectedBets(bets: Array<BetModel>): Array<BetModel> {
    return bets.filter(bet => bet.dobleChance.homeAwayRate.selected
                           || bet.dobleChance.homeDrawRate.selected
                           || bet.dobleChance.awayDrawRate.selected);
  }

  public getResultScoreSelectedBets(bets: Array<BetModel>): Array<BetModel> {
    return bets.map((bet:BetModel) => {
      var betCorrectScore: BetModel = new BetModel();
      betCorrectScore.id = bet.id;
      betCorrectScore.homeTeam = bet.homeTeam;
      betCorrectScore.awayTeam = bet.awayTeam;
      betCorrectScore.multiResult = bet.multiResult;
      betCorrectScore.dobleChance = bet.dobleChance;
      betCorrectScore.correctScoreModel = bet.correctScoreModel.filter(correctScore => correctScore.selected)
      return betCorrectScore;
    });
  }

  public changeSelected(betId: number, typeBet: string, betName: string) {
    betApi.changeSelected(betId, typeBet, betName);
    this.betModified$.emit();
  }

  public changeResultScoreSelected(betId, resultScoreId) {
    betApi.changeResultScoreSelected(betId, resultScoreId);
    this.betModified$.emit()
  }

  public deleteSelected(betId, typeBet, typeRate) {
    betApi.deleteSelected(betId, typeBet, typeRate);
  }

}
