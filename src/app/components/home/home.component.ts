import { Component } from '@angular/core';

@Component(
{
  selector: 'home', //This property is used to define how to call this component from HTML
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

class HomeComponent {
  ngOnInit() {
    console.log('Hello Home Component');
  }
}

export {
  HomeComponent
}
