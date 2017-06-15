import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{LoadingController} from'ionic-angular';


import { HomePage } from '../pages/home/home';
import{ListAlertsPage} from'../pages/list-alerts-page/list-alerts-page';
import {StorageCheck} from '../providers/storageCheck';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  loader:any;

  constructor(private storage:StorageCheck,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private loadingCtrl:LoadingController) {
    this.initializeApp();
    this.storage.CkeckRecords().then((isActive:any)=>{
      this.presentLoading();
      if(isActive==undefined)
      {
            this.rootPage=HomePage;
      }
      else
      {
            
            this.rootPage=ListAlertsPage;
      }
      this.loader.dismiss();
    })
  }

presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Checking Current Alert...",
    });
    this.loader.present();
  }
  initializeApp(){
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

