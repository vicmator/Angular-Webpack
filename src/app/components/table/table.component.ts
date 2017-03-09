import { Component, Input, OnInit } from '@angular/core';
import { BetService } from '../../service/betService';
import { BetModel } from './../../model/betModel';
import { typeBetEnum } from '../../common/typeBetEnum';
import { titleTableBet } from './../../common/titleTableBet';

@Component(
{
  selector: 'table-bet',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

class TableComponent implements OnInit{
  @Input()
  typeBet: string;

  options: Array<string>;
  betsModel: Array<BetModel>;
  titles: Array<string>;

  constructor(private betService: BetService) {
    this.betsModel = betService.getAllBets();
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

  setBet(buttonId, bet: BetModel, betName:string) {
    bet[this.typeBet][betName].selected = true;
    // betType
    (<HTMLInputElement> document.getElementById(buttonId)).disabled = true;
  }
}

export {
  TableComponent
}
