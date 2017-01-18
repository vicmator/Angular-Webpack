import { Component } from '@angular/core';

@Component(
{
  selector: 'header', //This property is used to define how to call this component from HTML
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

class HeaderComponent {
  ngOnInit() {
  }
}

export {
  HeaderComponent
}
