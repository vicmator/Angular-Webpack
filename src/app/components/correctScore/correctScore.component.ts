import {Component, OnInit} from '@angular/core';
import { BetAPI } from '../../api/betApi';
import { BetModel } from './../../model/betModel';

@Component({
  selector: 'correct-Score',
  templateUrl: './correctScore.component.html',
  styleUrls: ['./correctScore.component.scss'],
})

export class CorrectScoreComponent implements OnInit  {

  resultsVisible: boolean = true;
  betsModel: Array<BetModel>;

  constructor(private betApi: BetAPI) {
    this.betsModel = betApi.getAllBetsJson();
  }

  ngOnInit() { console.log('ngOnInit Correct CorrecScore'); }

  activeResults() {}
}
