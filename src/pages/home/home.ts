import { UserProvider} from '../../providers/user/user'
import { DetailsPage } from './../details/details';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

Countries:any;
countRecord:number;
public reorderT:boolean = true;
  constructor(public navCtrl: NavController, private alertCtrl:AlertController, private toasController:ToastController, private http:HttpClient, private service:UserProvider) {

  }
  loadAbout(){
    this.navCtrl.push(AboutPage);
  }

  getDetails(item,i){
    console.log(item.City);
    console.log(i);
    this.navCtrl.push(DetailsPage, {itemRecord: item})
  
  }

  addLocation(){
    let addCte = this.alertCtrl.create({
      title:"Add City",
      message: "Enter a new location",
      inputs:[
        {type:"text", name:"Country", placeholder:"Enter Country"},
        {type:"text", name:"City", placeholder:"Enter City"}
    ],
    buttons:
    [
      { text:"Cancel"},
      { text: "Add", handler: (newLocation)=>{this.Countries.push({"Country":newLocation.Country,"City":newLocation.City})}}
    
    ]

    });
    addCte.present();
  }

  deleteLocation(i)
  {
    this.Countries.splice(i,1);
  }

  toggle()
  {
    this.reorderT=!this.reorderT;
  }
  Reorder($event)
  {
    reorderArray(this.Countries, $event);
  }
ngOnInit()
{ 

this.service.getData().subscribe(
  data=>{this.Countries=data;
  this.countRecord=this.Countries.length;
  }
);
  /*
  this.http.get("/assets/countries.json").subscribe( data => {this.Countries=data;
  this.countRecord=this.Countries.length}
  */

  

}

}
