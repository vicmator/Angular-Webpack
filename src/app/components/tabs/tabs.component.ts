import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { TabComponent } from './tab/tab.component';

@Component(
{
  selector: 'tabs', //This property is used to define how to call this component from HTML
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabList: QueryList<TabComponent>;

  ngAfterContentInit() {
    // get All active tab
    let tabs = this.tabList;
    var countTabs = tabs.length;
    let activeTabs = this.tabList.filter((tab) => tab.active);

    if(activeTabs.length === 0) {
      this.selectTab(null, this.tabList.first);
    }
  }

  selectTab(event, tab: TabComponent) {
    if(event !== null) {
      event.preventDefault();
    }
    this.tabList.toArray().forEach((tab) => tab.active = false);

    tab.active = true;
  }
}

export {
  TabsComponent
}
