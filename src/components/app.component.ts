import { Component } from '@angular/core';

@Component(
{
    selector: 'app', //This property is used to define how to call this component from HTML
    template: '<h1>{{title}}</h1>' 
    // templateUrl: 'app.component.html'
})

class App {
 title: string = "Hello Angular 2 with Webpack!"
}

export {
 App
}