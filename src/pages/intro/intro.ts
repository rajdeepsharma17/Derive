import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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
    public authService: AuthServiceProvider) {
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

  googleLogin() {
    this.authService.googleLogin().then(()=>{
      this.startApp();
    });
  }
  

}
