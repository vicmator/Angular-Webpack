import { Component } from '@angular/core';

@Component(
{
  selector: 'tabs', //This property is used to define how to call this component from HTML
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

class TabsComponent {
  ngOnInit() {
    console.log('Hello Home Component');
  }
}

export {
  TabsComponent
}
