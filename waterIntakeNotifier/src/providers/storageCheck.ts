import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage  } from '@ionic/storage';
import {WaterValues} from '../models/WaterIntake'
/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StorageCheck {

  constructor(public storage:Storage) {
      
  }

  CkeckRecords(){
      
       return this.storage.get("name");
  }

  AddToStorage(name:string,weight:number,age:number,isActive:boolean, calculatedAmount:string)
  {     
      var info =new WaterValues();
      info.name=name;
      info.weight=weight;
      info.age=age;
      info.isActive=isActive;
      info.calculatedAmount=calculatedAmount
      //this.storage.set("name",info);
  }
  removeNotification()
  {
      this.storage.remove("name");
  }
}
