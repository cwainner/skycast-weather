import { Injectable } from '@angular/core';
import { apiConfig } from './api-keys';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddressSearchService {

  constructor(private httpClient: HttpClient) { }

  getGeoInfoFromAddress(address: string){
    var headers = new Headers();
    return this.httpClient.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: address,
          key: apiConfig.geoCodingKey
        }
      });
  }
}
