import { Component, Input, OnInit } from '@angular/core';
import { BetAPI } from '../../api/betApi';
import { BetModel } from './../../model/betModel';
import { typeBetEnum } from '../../common/typeBetEnum';

@Component(
{
  selector: 'table-bet',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [BetAPI]
})

class TableComponent implements OnInit{
  @Input()
  typeBet: string;

  betArray: string[];
  betsModel: BetModel[];

  constructor(betApi: BetAPI) {
    this.betsModel = betApi.getAllBetsJson();
  }

  ngOnInit() {
    if(this.typeBet === typeBetEnum.MultiResult)
      this.betArray = ['homeRate', 'drawRate', 'awayRate'];
    else
      this.betArray = ['homeDrawRate', 'homeAwayRate', 'awayDrawRate'];
  }

  setBet(betModel: BetModel, betName:string) {
    // betType
  }
}

export {
  TableComponent
}
