import { ViewUsersPage } from './../pages/view-users/view-users';
import { DetailsPage } from './../pages/details/details';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { HttpClientModule } from '@angular/common/http';
import { UserProvider } from '../providers/user/user';
import { WeatherServiceProvider } from '../providers/weather-service/weather-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage, AboutPage, DetailsPage, ViewUsersPage
  ],
  imports: [
    BrowserModule, HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    DetailsPage,
    ViewUsersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    WeatherServiceProvider
  ]
})
export class AppModule {}
