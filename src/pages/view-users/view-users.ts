import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-users',
  templateUrl: 'view-users.html',
})
export class ViewUsersPage {
gitUser:any;
randnum:number;
  constructor(public navCtrl: NavController, private userSrv:UserProvider) {
    this.userSrv.getData().subscribe(data => this.gitUser=data)
   this.randnum = Math.ceil(Math.random())*100;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewUsersPage');
    
  }

}
