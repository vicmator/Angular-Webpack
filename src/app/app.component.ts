import { Component } from '@angular/core';

import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';

@Component(
{
  selector: 'app', //This property is used to define how to call this component from HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

class AppComponent {
  title: string = "BET VICTOR"

}

export {
  AppComponent
}
