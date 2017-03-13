import { CorrectScoreModel } from './../../model/correctScore';
import { DobleChanceModel } from './../../model/dobleChance';
import { MultiResultModel } from './../../model/multiResult';
import { BetService } from './../../service/betService';
import { BetModel } from './../../model/betModel';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ResultBetComponent } from './resultBet/resultBet.component';

@Component({
  selector: 'result-Bets',
  templateUrl: './resultBets.component.html',
  styleUrls: ['./resultBets.component.scss']
})

export class ResultBetsComponent implements OnInit  {

  bets: Array<BetModel>;
  multiResultSelectedBets:Array<BetModel>;
  dobleChanceSelectedBets:Array<BetModel>;
  resultScoreSelectedBets:Array<BetModel>;
  @ViewChild(ResultBetComponent) viewChild:ResultBetComponent;

  constructor(private betService: BetService) {
    this.bets = betService.getAllBets();
    betService.betModified$.subscribe(item => this.onBetModified());
  }

  onBetModified() {
    this.multiResultSelectedBets = this.betService.getMultiResultSelectedBets(this.bets);
    this.dobleChanceSelectedBets = this.betService.getDobleChanceSelectedBets(this.bets);
    this.resultScoreSelectedBets = this.betService.getMultiResultSelectedBets(this.bets);
  }

  ngOnInit() {

  }
}
