import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { UserSignUpPage } from '../pages/user-sign-up/user-sign-up';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = IntroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    statusBar.overlaysWebView(true);
    statusBar.backgroundColorByHexString('#ffffff');

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.startApp();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  startApp(){
    if(this.ifUserSignedIn()){
      this.rootPage = UserSignUpPage;
    }else{
      this.rootPage = IntroPage;
    }
  }
  // To be modified in future, for now returning static value
  ifUserSignedIn(){
    return true;
  }
}

