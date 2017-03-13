import { BetService } from './../../../service/betService';
import { BetModel } from './../../../model/betModel';

import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'result-Bet',
  templateUrl: './resultBet.component.html',
  styleUrls: ['./resultBet.component.scss']
})

export class ResultBetComponent implements OnInit {
  private _typeBet = '';
  @Input()
  set typeBet(typeBet: string) {
    this._typeBet = (typeBet && typeBet.trim()) || 'Paco';
  }
  @Input()
  bets: Array<BetModel>;
  winRate = 0;

  constructor(private betService: BetService) {

  }

  ngOnInit() {
  }

  deleteBetDone(bet:BetModel, typeRate: string) {
    this.betService.deleteSelected(bet.id, this._typeBet, typeRate);
    (<HTMLInputElement> document.getElementById(`btn${typeRate}${bet.id}`)).disabled = false;
  }

  // CHANGE NUMBER WINRATE WHEN SEPARATE IN DIFFERENT COMPONENT
  rateValueChange(event, bet: BetModel, typeRate: string) {
    var rateBet:number = bet[this._typeBet][typeRate].rate;
    let rateInput:number = event.currentTarget.value;
    this.winRate = Math.round((rateInput * rateBet) * 100) / 100;

  }
}
