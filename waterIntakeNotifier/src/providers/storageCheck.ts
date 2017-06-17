import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage  } from '@ionic/storage';
import {WaterValues} from '../models/WaterIntake'
import { LocalNotifications } from '@ionic-native/local-notifications';
/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StorageCheck {

  constructor(public storage:Storage,private localNotifications: LocalNotifications) {
      
  }

  CkeckRecords(){    
       return this.storage.get("name");
  }

  SchduleAlert(info:string){
    var today = new Date();
      if( today.getDay() == 0) 
      {
        today.setDate(today.getDate() + 1);
      }
      else if(today.getDay() == 6)
      {
        today.setDate(today.getDate() + 1);
      }

      this.localNotifications.schedule({
      text: info,
      at: new Date(today.getTime() + 3600),
      led: 'FF0000',
      sound: null
    });
  }

ClearAllNotification()
{
  this.localNotifications.clearAll().then(()=>this.removeNotification());
}
  AddToStorage(name:string,weight:number,age:number,isActive:boolean, calculatedAmount:string,startTime:string,endTime:string)
  {     
      var info =new WaterValues();
      info.name=name;
      info.weight=weight;
      info.age=age;
      info.isActive=isActive;
      info.calculatedAmount=calculatedAmount;
      info.startTime=startTime;
      info.endTime=endTime;
      this.storage.set("name",info);
  }
  removeNotification()
  {
      return this.storage.remove("name");
  }

  cancelNotification()
  {
    return this.localNotifications.cancelAll();
  }
}
