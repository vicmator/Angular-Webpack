import { Component } from '@angular/core';
// import { BetAPI } from './api/betApi';

import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderComponent } from './components/common/header/header.component';
import { TableComponent } from './components/table/table.component';
import { CorrectScoreComponent } from './components/correctScore/correctScore.component';

import { typeBetEnum } from './common/typeBetEnum';

@Component(
{
  selector: 'app', //This property is used to define how to call this component from HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [BetAPI]
})

class AppComponent {
  typeBetEnum = typeBetEnum;
}

export {
  AppComponent
}
