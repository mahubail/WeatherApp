import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PARAMETERS } from '@angular/core/src/util/decorators';

/*
  Generated class for the WeatherServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherServiceProvider {
weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=";
parameters = "&units=metric&appid=";
  apiKey = "9c9cdc130c3bda91cd9ef946098c38f8";
  constructor(public http: HttpClient) {}

  getLocation()
  {
    //return this.http.get(this.apiUrl);
  }

  getWeather(city)
  {
    console.log(this.weatherAPI + city + this.parameters + this.apiKey);
    return this.http.get(this.weatherAPI + city + this.parameters + this.apiKey);
  }
}
