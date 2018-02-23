import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

import { GeoProvider } from '../../providers/geo/geo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  UUID:String;
  latitude;
  longitude;
  confirm:Boolean=false;
  UUIDmessage:String;
  address:String="";
  constructor(public navCtrl: NavController,private platform: Platform,
    private geolocation: Geolocation,private geoProvider:GeoProvider) {

      platform.ready().then(() => {
        
      // get current position
      geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        this.latitude=pos.coords.latitude;
        this.longitude=pos.coords.longitude;
        console.log(this.latitude);
        console.log(this.longitude);
      });

      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      
      });

      // to stop watching
      watch.unsubscribe();

    });

  }
  getLocation(){
    console.log("here1");
    this.geoProvider.getLocation(this.latitude,this.longitude).subscribe(data=>{
      this.address = data.results[0].formatted_address;
      console.log(this.address);
    });
    this.UUID=""
    this.confirm=false;
	this.UUIDmessage="";
  }
  UUIDconfirm(){
    let uuid={uuid:this.UUID};    
    this.geoProvider.UUIDconfirm(uuid).subscribe(data=>{
      this.UUIDmessage=data.msg;
      this.confirm=data.success;
	  this.address="";
      console.log(this.UUIDmessage);
    });
  }

}
