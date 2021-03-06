import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SkyCast Weather';
  address: string;

  showCurrentForecast(){
    $('#currentForecast').show();
  }

  showHistoricalForecast(){
    $('#currentForecast').hide();
  }

  searchForLocation(){
    this.address = $('#searchLocationField').val();
  }
}
