import { Injectable } from '@angular/core';
import { apiConfig } from './api-keys';
import { Http, Response } from '@angular/http';

@Injectable()
export class AddressSearchService {

  constructor(private http: Http) { }

  getGeoInfoFromAddress(address: string){
    var params = "address=" + address + "key=" + apiConfig.geoCodingKey;
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json", params);
  }
}
