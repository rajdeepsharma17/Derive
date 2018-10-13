import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController } from 'ionic-angular';

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
      description: "Find rides within your own Campus.",
      image: 'assets/imgs/undraw_city_driver_jh2h.svg',
    },
    {
      title: "Cost Effective",
      description: "Direct interaction with the vehicle owner",
      image: 'assets/imgs/undraw_savings_hjfl.svg',
    },
    {
      title: "Socialize",
      description: "Meet new people from your own organization while you travel.",
      image: 'assets/imgs/undraw_hang_out_h9ud.svg',
    },
    {
      title: "Notifications",
      description: "Get notified when rides available",
      image: 'assets/imgs/undraw_mail_2_tqip.svg',
    }
  ];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController) {
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
    let loading = this.loadingCtrl.create({
      content: 'Logging In',
    });

    loading.present();

    this.authService.googleLogin()
    .then(() => {
      loading.dismiss();
      this.startApp();
    });
  }
  

}
