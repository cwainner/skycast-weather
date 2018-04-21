import { Component, OnInit, Input } from '@angular/core';
import { AddressSearchService } from '../address-search.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.scss'],
  providers: [AddressSearchService]
})
export class CurrentForecastComponent implements OnInit {
  addressLatLong: string;

  @Input()
  addressToSearch: string;

  constructor(private addressSearchService: AddressSearchService) { }

  ngOnInit() {
  }

  getSearchedAddressLocation(address: string){
    this.addressSearchService.getGeoInfoFromAddress(address)
    .subscribe(data => this.updateLatLong(data));
  }

  updateLatLong(data: any){
    this.addressLatLong = data['results'];
    $('#test').text = this.addressLatLong;
  }

}
