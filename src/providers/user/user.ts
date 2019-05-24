import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
ApiUrl = "assets/countries.json";
//ApiUrl = "https://api.github.com/users";
  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
getData(){return this.http.get(this.ApiUrl);}
}
