import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';
import firebase from 'firebase';
import { NativeStorage } from '@ionic-native/native-storage';
import { AngularFireAuth } from '@angular/fire/auth';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(
    private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform,
    private nativeStorage: NativeStorage,
  ) {
    console.log('Hello AuthServiceProvider Provider');
  }

  async nativeGoogleLogin() {
    try {
      await this.gplus.login({
        'webClientId': '46695463328-5bl5gr5jgr1did2vq3im8sv8jqlp0sq2.apps.googleusercontent.com',
        'offline': true,
      })
      .then((user)=> {
        this.nativeStorage.setItem('user', {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          picture: user.imageUrl
        });
        this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(user.idToken))
      });  
    } catch(err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await this.afAuth.auth.signInWithPopup(provider);
    } catch(err) {
      console.log(err)
    }
  }

  async googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }
  
  signOut() {
    this.nativeStorage.remove('user');
    this.afAuth.auth.signOut();
  }

}
