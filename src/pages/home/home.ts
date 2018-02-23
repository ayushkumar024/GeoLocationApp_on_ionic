import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GeoProvider } from '../../providers/geo/geo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email:String;
  username:String;
  password:String;
  show="";
  constructor(public navCtrl: NavController,private GeoProvider:GeoProvider ) {
      
  }
  addusers(){
    let user ={
      email:this.email,
      username:this.username,
      password:this.password
    };
    this.GeoProvider.adduser(user).subscribe(data=>{
      this.show=data.msg;
    });
    this.email="";
    this.username="";
    this.password="";
  }


}
