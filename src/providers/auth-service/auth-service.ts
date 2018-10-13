import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';
import firebase from 'firebase';
import { NativeStorage } from '@ionic-native/native-storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  users: Observable<any>;
  usersCollection: AngularFirestoreCollection<any>;
  constructor(
    private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform,
    private nativeStorage: NativeStorage,
    private afs: AngularFirestore ) {
      this.usersCollection = this.afs.collection("users");
      console.log(this.usersCollection);
      this.users = this.usersCollection.valueChanges();
  }

  ionViewWillEnter() {
    
 }

  async nativeGoogleLogin() {
    try {
      let user = await this.gplus.login({
        'webClientId': '46695463328-5bl5gr5jgr1did2vq3im8sv8jqlp0sq2.apps.googleusercontent.com',
        'offline': true,
      });

      let userx = await this.afAuth.auth
        .signInWithCredential(firebase.auth.GoogleAuthProvider.credential(user.idToken));
      
      await this.nativeStorage.setItem('user', {
        uid: userx.uid,
        name: userx.displayName,
        email: userx.email,
        image: userx.photoURL,
      });

      await this.registerUser(userx);
    } catch(err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      let credentials = await this.afAuth.auth.signInWithPopup(provider);
      let user = credentials.user;

      await this.registerUser(user);
    } catch(err) {
      console.log(err)
    }
  }

  async googleLogin() {
    if (this.platform.is('cordova')) {
      await this.nativeGoogleLogin();
    } else {
      await this.webGoogleLogin();
    }
  }
  
  signOut() {
    this.nativeStorage.remove('user');
    this.afAuth.auth.signOut();
  }

  async registerUser(user){
    await this.usersCollection.add({
      id: user.uid,
      name: user.displayName,
      email: user.email,
      phone: user.phoneNumber,
      timeStamp: new Date(),
      image: user.photoURL,
      preferences: [],
      department: "",
      circle: "",
    });
  }
}
