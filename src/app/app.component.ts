import { Component } from '@angular/core';

import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderComponent } from './components/common/header/header.component';
import { TableComponent } from './components/table/table.component';
import { typeBetEnum } from './common/typeBetEnum';

@Component(
{
  selector: 'app', //This property is used to define how to call this component from HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

class AppComponent {
  typeBetEnum = typeBetEnum;
}

export {
  AppComponent
}
