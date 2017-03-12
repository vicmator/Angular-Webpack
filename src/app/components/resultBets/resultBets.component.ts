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
    this.multiResultSelectedBets = this.bets.filter(bet => bet.multiResult.homeRate.selected
                                                        || bet.multiResult.awayRate.selected
                                                        || bet.multiResult.drawRate.selected);
    this.dobleChanceSelectedBets = this.bets.filter(bet => bet.dobleChance.homeAwayRate.selected
                                                        || bet.dobleChance.homeDrawRate.selected
                                                        || bet.dobleChance.awayDrawRate.selected);

  }

  ngOnInit() {


    // this.resultScoreSelectedBets = this.bets.map((bet:BetModel) => {
    //   var betCorrectScore: BetModel = new BetModel();
    //   betCorrectScore = bet.correctScoreModel.filter(correctScore => correctScore.selected)
    //   return betCorrectScore;
    // });

    // this.resultScoreSelectedBets = this.bets.map((bet:BetModel) => {
    //   return bet.correctScoreModel.filter(x=> x.selected);
    // });
  }
}
