//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the GeoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeoProvider {

  constructor(public http: Http) {
    console.log('Hello GeoProvider Provider');
  }
  
  getLocation(lat,long){
    console.log(lat,long);
    let ep='https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'&key=AIzaSyCQOzdMOX7EQXbJLeZdblX7vIBZl8GzcWY';
    return this.http.get(ep).map(res=>res.json()); 
  }



  adduser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = 'http://localhost:3000/users/register';
    return this.http.post(ep,user,{ headers: headers }).map(res => res.json());
  }

  UUIDconfirm(uuid){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = 'http://localhost:3000/users/verify';
    return this.http.post(ep,uuid,{ headers: headers }).map(res => res.json());
  }

}
