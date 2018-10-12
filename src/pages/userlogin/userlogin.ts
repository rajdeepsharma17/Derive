import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firbase from 'firebase';


/**
 * Generated class for the UserloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userlogin',
  templateUrl: 'userlogin.html',
})
export class UserloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public googlePlus: GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserloginPage');
  }
  submit(){
    this.googlePlus.login({
      webClientId: '46695463328-5bl5gr5jgr1did2vq3im8sv8jqlp0sq2.apps.googleusercontent.com',
      offline: true
    }).then(res=>{
      firbase.auth().signInWithCredential(firbase.auth.GoogleAuthProvider.credential(res.idToken))
        .then(suc=>{alert("Login Success")})
    }).catch(ns=>{alert("Something went wrong")})
    this.navCtrl.push(HomePage)
  }

}
