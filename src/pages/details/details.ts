import { WeatherServiceProvider } from './../../providers/weather-service/weather-service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
locationDetails:any;
weather:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherService:WeatherServiceProvider, public toastCtrl:ToastController) {
    this.locationDetails=this.navParams.data.itemRecord;
    console.log(navParams.data.itemRecord)
    console.log("Country is: " + this.locationDetails.Country);
    console.log("City is: " + this.locationDetails.City);
    this.weatherService.getWeather(this.locationDetails.City + "," + this.locationDetails.Country).subscribe(
      data=>{this.weather=data;
    console.log(this.weather);
    },
    (err)=>{
      let toast = this.toastCtrl.create(
        {
          message: this.locationDetails.City + "does not exist.",
          duration: 2000
        }
      );
      toast.onDidDismiss(()=>
      this.navCtrl.pop()
      );
    }
    
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
