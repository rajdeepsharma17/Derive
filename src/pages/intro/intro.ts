import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserSignUpPage } from '../user-sign-up/user-sign-up';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  startApp() {
    this.navCtrl.setRoot(UserSignUpPage, {}, {
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

}
