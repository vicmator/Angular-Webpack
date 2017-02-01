import { Component, Input, OnInit } from '@angular/core';
import { BetAPI } from '../../api/betApi';
import { BetModel } from './../../model/betModel';

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
  
  betsModel: BetModel[];

  constructor(betApi: BetAPI) {
    this.betsModel = betApi.getAllBetsJson();
  }
  ngOnInit() {

  }
}

export {
  TableComponent
}
