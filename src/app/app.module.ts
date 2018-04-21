import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CurrentForecastComponent } from './current-forecast/current-forecast.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentForecastComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
