import { Component, Input, OnInit } from '@angular/core';
import { BetAPI } from '../../api/betApi';
import { BetModel } from './../../model/betModel';
import { typeBetEnum } from '../../common/typeBetEnum';
import { titleTableBet } from './../../common/titleTableBet';

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

  options: Array<string>;
  betsModel: Array<BetModel>;
  titles: Array<string>;

  constructor(private betApi: BetAPI) {
    this.betsModel = betApi.getAllBetsJson();
  }

  ngOnInit() {
    if(this.typeBet === typeBetEnum.MultiResult) {
      this.options = ['homeRate', 'drawRate', 'awayRate'];
      this.titles = titleTableBet.MultiResultTitle;
    }
    else {
      this.options = ['homeDrawRate', 'homeAwayRate', 'awayDrawRate'];
      this.titles = titleTableBet.DobleChanceTitle;
    }
  }

  setBet(button, betModel: BetModel, betName:string) {
    // betType
  }
}

export {
  TableComponent
}
