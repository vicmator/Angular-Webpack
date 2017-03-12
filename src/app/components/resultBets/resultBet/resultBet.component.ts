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

  constructor(private betService: BetService) {
  }

  // ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  //   let log: string[] = [];
  //   for (let propName in changes) {
  //     let changedProp = changes[propName];
  //     let to = JSON.stringify(changedProp.currentValue);
  //     if (changedProp.isFirstChange()) {
  //       log.push(`Initial value of ${propName} set to ${to}`);
  //     } else {
  //       let from = JSON.stringify(changedProp.previousValue);
  //       log.push(`${propName} changed from ${from} to ${to}`);
  //     }
  //   }
  // }

  ngOnInit() {
  }

  deleteBetDone(bet:BetModel, typeRate: string) {
    this.betService.deleteSelected(bet.id, this._typeBet, typeRate);
    alert(typeRate);
  }
}
