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
  primary: string = "#488aff";
  success: string = "#32db64";
  loader:boolean = false;
  showResponse: boolean = false;

  constructor(public navCtrl: NavController, private dataService: PulldataProvider, private toastCtrl: ToastController) {
  }

  fetchRemoteData() {
    if (this.api_uri) {
      this.loader =  true;
      this.showResponse = false;
      this.dataService.getRemoteData(this.api_uri).subscribe(
        res => {
          this.loader = false;
          this.showResponse = true;
          this.posts = res;
          console.log(this.posts);
        },
        err => {
          this.invalidData();
        }
      );
    }
    else {
      this.noURI();
    }
  }

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
    this.loader =  false;
  }

  invalidData(){
    let toast = this.toastCtrl.create({
      message: 'Oops! There is an issue with your resource uri',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
    this.loader =  false;
  }

  successData(){
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

}
