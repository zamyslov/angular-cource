import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import {ColorDirective} from './shared/color.directive';
import {HeaderComponent} from './header/header.component';
import {CarsModule} from './cars-page/cars.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ColorDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
