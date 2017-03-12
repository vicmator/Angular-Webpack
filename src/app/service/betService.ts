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

  public changeSelected(betId: number, typeBet: string, betName: string) {
    betApi.changeSelected(betId, typeBet, betName);
    this.betModified$.emit();
  }

  public deleteSelected(betId, typeBet, typeRate) {
    betApi.deleteSelected(betId, typeBet, typeRate);
  }

}
