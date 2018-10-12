import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { UserSignUpPage } from '../pages/user-sign-up/user-sign-up';
import { NativeStorage } from '@ionic-native/native-storage';
import { GooglePlus } from '@ionic-native/google-plus';
import firbase from 'firebase';
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
        this.GoogleLogin();
      });
      statusBar.styleDefault();
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

  GoogleLogin(){
    this.googlePlus.login({
      'webClientId': '46695463328-5bl5gr5jgr1did2vq3im8sv8jqlp0sq2.apps.googleusercontent.com',
      'offline': true
    })
    .then((user)=> {
      this.rootPage = HomePage;
      this.nativeStorage.setItem('user', {
        name: user.displayName,
        email: user.email,
        picture: user.imageUrl
      })
      .then(()=>{
        this.splashScreen.hide();
      }, function (error) {
        this.rootPage = HomePage;
        console.log(error);
      })
    });
  }
}

