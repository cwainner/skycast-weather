import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { AddressSearchService } from '../address-search.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.scss'],
  providers: [AddressSearchService]
})
export class CurrentForecastComponent implements OnInit, OnChanges {
  addressLatLong: string;

  @Input()
  addressToSearch: string;

  constructor(private addressSearchService: AddressSearchService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    if(changes['addressToSearch'] && this.addressToSearch !== undefined && this.addressToSearch !== null){
      this.getSearchedAddressLocation(this.addressToSearch);
    }
  }

  getSearchedAddressLocation(address: string){
    this.addressSearchService.getGeoInfoFromAddress(address)
    .subscribe(response => {
      this.updateLatLong(response);
    });
  }

  updateLatLong(response: Object){
    console.log(response['results'][0]['geometry']['location']);
    this.addressLatLong = response['results'][0]['geometry']['location']['lat'].toString() + ", " + response['results'][0]['geometry']['location']['lng'].toString();
    console.log(this.addressLatLong);
  }

}
