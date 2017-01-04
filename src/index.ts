import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App } from './components/app.component';

@NgModule({
    declarations: [App], //defines which components we are going to use in this module
    imports: [BrowserModule], //describes which dependencies this module has
    bootstrap: [App] //this property tells Angular to load, in this case, App component as the top-level component.
})

class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)