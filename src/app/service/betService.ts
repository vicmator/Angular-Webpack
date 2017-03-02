import { Promise } from "core-js";
import { Injectable } from '@angular/core';
import { BetModel } from '../model/betModel';
import { CorrectScoreModel } from '../model/correctScore';
import { betApi } from '../api/betApi';

@Injectable()
export class BetService {

  public getAllBets(): any {
    return betApi.betsModel;
  }

}
