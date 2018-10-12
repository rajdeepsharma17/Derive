import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';
import firebase from 'firebase';


/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  user: Observable<firebase.User>;
  showSkip = true;
  dir: string = 'ltr';
  slides = [
    {
      title: "Welcome to Dérive",
      description: "Description",
      image: 'assets/imgs/ica-slidebox-img-1.png',
    },
    {
      title: "What is The App?",
      description: "Description",
      image: 'assets/imgs/ica-slidebox-img-2.png',
    },
    {
      title: "Some Feature",
      description: "Feature description",
      image: 'assets/imgs/ica-slidebox-img-3.png',
    }
  ];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform) {
      this.user = this.afAuth.authState;
  }

  startApp() {
    this.navCtrl.setRoot(HomePage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  async nativeGoogleLogin(): Promise<firebase.User> {
    try {
  
      const gplusUser = await this.gplus.login({
        'webClientId': '46695463328-5bl5gr5jgr1did2vq3im8sv8jqlp0sq2.apps.googleusercontent.com',
        'offline': true,
      })
  
      return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
  
    } catch(err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      console.log(credential);
    } catch(err) {
      console.log(err)
    }
  
  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
    this.navCtrl.setRoot(HomePage, {}, {
      animate: true,
      direction: 'forward'
    });
  }
  
  signOut() {
    this.afAuth.auth.signOut();
  }

}
