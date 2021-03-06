import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {StorageCheck} from '../../providers/storageCheck';
import { AlertController } from 'ionic-angular';
import {WaterValues} from '../../models/WaterIntake'
import{HomePage} from'../home/home';

/**
 * Generated class for the ListAlertsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-list-alerts-page',
  templateUrl: 'list-alerts-page.html',
})
export class ListAlertsPage {
   info:WaterValues;

  constructor(public navCtrl: NavController, public navParams: NavParams,private store:StorageCheck,private alertCtrl:AlertController) {
     
     this.info=new WaterValues();
  }
  ionViewWillEnter() {
   this.store.CkeckRecords().then((d:WaterValues)=>{
        this.info=d;      
      }); 
  }
  ToggleNotification(isActive:boolean)
  {
    if(isActive)
    {
        //this.store.SchduleAlert("Frank Should Drink 2oz of water Now");
    }
    else
    {
          let alert = this.alertCtrl.create({
          title: 'Cancel Notofication',
          message: 'Are you sure you want to Stop this notication?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler:()=>{ this.info.isActive=true;}
            },
            {
              text: 'Yes',
              handler: () => {
                this.info.isActive=false;
                //this.store.cancelNotification();
              }
            }
          ]
        });
        alert.present();      
    }   
  }
  RemoveNotification():void
  {
    this.store.removeNotification().then(()=>
    this.navCtrl.setRoot(HomePage));
  }

  presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Delete Notofication',
    message: 'Are you sure you want to Delete this notication?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Yes',
        handler: () => {
           this.RemoveNotification();
        }
      }
    ]
  });
  alert.present();
}


}
