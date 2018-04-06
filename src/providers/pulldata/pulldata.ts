import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PulldataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PulldataProvider Called!');
  }

  getRemoteData(remoteUrl) {
    return this.http.get<Data>(remoteUrl);
  }

}

export interface Data{
  heroesUrl: string;
  textfile: string
}