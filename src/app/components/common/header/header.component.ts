import { BetModel } from './../../../model/betModel';
import { BetAPI } from './../../../api/api';
import { Component } from '@angular/core';

@Component(
{
  selector: 'header', //This property is used to define how to call this component from HTML
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [BetAPI]
})

class HeaderComponent {
  betsModel: BetModel;
  constructor(betApi: BetAPI) {
    this.betsModel = betApi.getBetsJson();
  }
  ngOnInit() {
  }
}

export {
  HeaderComponent
}
