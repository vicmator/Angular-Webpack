import { CorrectScoreModel } from './../../model/correctScore';
import { Component, OnInit } from '@angular/core';
import { BetAPI } from '../../api/betApi';
import { BetModel } from './../../model/betModel';
import { typeCorrectScoreEnum } from './../../common/typeCorrectScoreEnum';

@Component({
  selector: 'correct-Score',
  templateUrl: './correctScore.component.html',
  styleUrls: ['./correctScore.component.scss']
})

export class CorrectScoreComponent implements OnInit  {

  resultsVisible: Array<boolean>;
  betsModel: Array<BetModel>;

  constructor(private betApi: BetAPI) {
    this.betsModel = betApi.getAllBetsJson();
  }

  ngOnInit() {
    console.log('ngOnInit Correct CorrecScore');
    this.resultsVisible = new Array(this.betsModel.length);
  }

  activeResults(idBet:number) {
    this.resultsVisible[idBet] = !this.resultsVisible[idBet];
    this.setChangeIcon(idBet +1);
  }

  setChangeIcon(id:number) {
    (<HTMLInputElement>
        document.getElementById(`glyphiconBet${id}`)).className = '';
    if(this.resultsVisible[id -1] === false)
      (<HTMLInputElement>
        document.getElementById(`glyphiconBet${id}`)).className = 'glyphicon glyphicon-chevron-down';
    else
      (<HTMLInputElement>
        document.getElementById(`glyphiconBet${id}`)).className = 'glyphicon glyphicon-chevron-up';
  }

  setBetCorrectScore(buttonId, bet: BetModel, resultScore: CorrectScoreModel) {
    (<HTMLInputElement>
      document.getElementById(buttonId)).disabled = true;
  }

}
