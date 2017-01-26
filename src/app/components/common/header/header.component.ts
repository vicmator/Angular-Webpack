import { BetModel } from './../../../model/betModel';
import { BetAPI } from '../../../api/betApi';
import { Component } from '@angular/core';

@Component(
{
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [BetAPI]
})

class HeaderComponent {
  betsModel: BetModel[];
  constructor(betApi: BetAPI) {
    this.betsModel = betApi.getAllBetsJson();
  }
  ngOnInit() {
  }
}

export {
  HeaderComponent
}