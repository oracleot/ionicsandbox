import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PulldataProvider {

  apiKey = "AIzaSyDnfd0T0N0QjiEM94hxVfSIzKnpUm24zIs";
  mapsUrl = "https://maps.googleapis.com/maps/api/directions/jsonp?";
// https://maps.googleapis.com/maps/api/directions/json?origin=Abeokuta, Ogun State&destination=Port-Harcourt&key=AIzaSyDnfd0T0N0QjiEM94hxVfSIzKnpUm24zIs
// https://maps.googleapis.com/maps/api/directions/jsonp?origin=Lagos&destination=Port-Harcourt&key=AIzaSyDnfd0T0N0QjiEM94hxVfSIzKnpUm24zIs

  constructor(public http: Http) {
    console.log('Hello PulldataProvider Called!');
  }

  // getRemoteData(remoteUrl) {
  //   return this.http.get<Data>(remoteUrl);
  // }

  checkValidIP(ip) {
    return this.http.get('https://check.getipintel.net/check.php?ip=' + ip);
  }

  checkDirections(origin, destination) {
    return new Promise((resolve, reject) => {
      this.http.get("https://maps.googleapis.com/maps/api/directions/json?origin="+origin+"&destination="+destination+"&key=AIzaSyDnfd0T0N0QjiEM94hxVfSIzKnpUm24zIs")
        .subscribe(
          res => { resolve(res) },
          (err) => { reject(err); }
        );
    });
  }

}

export interface Data {
  heroesUrl: string;
  textfile: string
}