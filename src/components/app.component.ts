import { Component } from '@angular/core';

@Component(
{
  selector: 'app', //This property is used to define how to call this component from HTML
  templateUrl: './app.component.html'
})

class App {
  title: string = "Hello Angular 2 with Webpack!"
}

export {
  App
}
