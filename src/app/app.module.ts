// Angular components
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { routing } from './app.routing';

// Application components
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { HeaderComponent } from './components/common/header/header.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
    declarations: [
      AppComponent,
      TabsComponent,
      TabComponent,
      HeaderComponent,
      TableComponent,
      ], //defines which components we are going to use in this module
    imports: [BrowserModule, routing], //describes which dependencies this module has
    bootstrap: [AppComponent] //this property tells Angular to load, in this case, App component as the top-level component.
})

export class AppModule {
}
