import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserloginPage } from '../userlogin/userlogin';

/**
 * Generated class for the UserSignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-sign-up',
  templateUrl: 'user-sign-up.html',
})
export class UserSignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignUpPage');
  }
  submit(){
    this.navCtrl.push(HomePage)
  }
  login(){
    this.navCtrl.push(UserloginPage)
  }

}
