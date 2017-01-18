// Angular components
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { routing } from './app.routing';

// Application components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { HeaderComponent } from './components/common/header/header.component';

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      TabsComponent,
      TabComponent,
      HeaderComponent
      ], //defines which components we are going to use in this module
    imports: [BrowserModule, routing], //describes which dependencies this module has
    bootstrap: [AppComponent] //this property tells Angular to load, in this case, App component as the top-level component.
})

export class AppModule {
}
