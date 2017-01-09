import { Component } from '@angular/core';

@Component(
{
  selector: 'about', //This property is used to define how to call this component from HTML
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

class AboutComponent {
  ngOnInit() {
    console.log('Hello About Component');
  }
}

export {
  AboutComponent
}
