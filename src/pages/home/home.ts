import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PulldataProvider } from '../../providers/pulldata/pulldata';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;
  config: any;
  api_uri: any;
  success: string = "#32db64";
  loader: boolean = false;
  showResponse: boolean = false;
  ip: string = '';

  userLocation = {
    origin: "Lagos",
    destination: "Port-Harcourt"
  }

  response_data: any;
  legs: any;
  steps: any;

  constructor(public navCtrl: NavController, private dataService: PulldataProvider, private toastCtrl: ToastController) {
  }

  // fetchRemoteData() {
  //   if (this.api_uri) {
  //     this.loader = true;
  //     this.showResponse = false;
  //     this.dataService.getRemoteData(this.api_uri).subscribe(
  //       res => {
  //         this.loader = false;
  //         this.showResponse = true;
  //         this.posts = res;
  //         console.log(this.posts);
  //       },
  //       err => {
  //         this.invalidURI();
  //       }
  //     );
  //   }
  //   else {
  //     this.noURI();
  //   }
  // }

  noURI() {
    let toast = this.toastCtrl.create({
      message: 'Sorry bro! you need to enter a resource uri',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
    this.loader = false;
  }

  invalidURI() {
    let toast = this.toastCtrl.create({
      message: 'Oops! There is an issue with your resource uri',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
    this.loader = false;
  }

  successMsg() {
    let toast = this.toastCtrl.create({
      message: 'We are fetching your response',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  checkIp() {
    this.dataService.checkValidIP(this.ip).subscribe(data => {
      data
    });
  }

  getTravelInfo() {
    this.dataService.checkDirections(this.userLocation.origin, this.userLocation.destination)
      .then((res) => {
        // console.log(res);
        const body = res['_body'];
        const parsed_body = JSON.parse(body);
        this.response_data = parsed_body.routes[0];
        this.legs = parsed_body.routes[0].legs[0];
        console.log(this.response_data)
      }, (err) => {
        console.log('Error calling api',err);
      });
  }

}