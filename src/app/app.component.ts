import { Component } from '@angular/core';

@Component(
{
  selector: 'app', //This property is used to define how to call this component from HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

class AppComponent {
  title: string = "Hello Angular 2 with Webpack!"

  ngOnInit() {
    console.log('Hello Component');
  }
}

export {
  AppComponent
}
