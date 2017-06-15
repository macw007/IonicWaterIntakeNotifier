import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StorageCheck} from '../../providers/storageCheck';
import{ListAlertsPage} from'../list-alerts-page/list-alerts-page';


@Component
({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
name:string;
weight:number;
age:number;
isActive:boolean;
  constructor(private store:StorageCheck,public navCtrl: NavController) {
    
  }
  
  calculte(){
    var x = this.weight*0.5;
    this.isActive=true;
    this.store.AddToStorage(this.name,this.weight,this.age,this.isActive,x.toString());
    this.navCtrl.setRoot(ListAlertsPage);
  }
}
