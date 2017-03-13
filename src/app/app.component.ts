import { Component } from '@angular/core';
import { BetService } from './service/betService';

import { typeBetEnum } from './common/typeBetEnum';

@Component(
{
  selector: 'app', //This property is used to define how to call this component from HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BetService]
})

class AppComponent {
  debugger;
  typeBetEnum = typeBetEnum;
}

export {
  AppComponent
}
