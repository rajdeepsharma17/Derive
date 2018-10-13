import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { NativeStorage } from '@ionic-native/native-storage';
import { GooglePlus } from '@ionic-native/google-plus';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  splashScreen: SplashScreen;

  constructor(
    platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private nativeStorage: NativeStorage,
    public googlePlus: GooglePlus) {

    statusBar.overlaysWebView(true);
    statusBar.backgroundColorByHexString('#ffffff');

    platform.ready().then(() => {
      this.nativeStorage.getItem('user')
      .then((data)=> {
        this.rootPage = HomePage;
        splashScreen.hide();
      },(error)=> {
        this.rootPage = HomePage;
        splashScreen.hide();
      });
      statusBar.styleDefault();
    });
  }
}

