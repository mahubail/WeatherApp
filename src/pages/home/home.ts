import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Countries=[
  {"Country":"Bahrain","City":"Manama"},
  {"Country":"KSA","City":"Riyadh"},
  {"Country":"UAE","City":"Dubai"}
 
];
  constructor(public navCtrl: NavController, private alertCtrl:AlertController) {

  }
  loadAbout(){
    this.navCtrl.push(AboutPage);
  }

  getDetails(item){console.log(item.City);
  
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
}
