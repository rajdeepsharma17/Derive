import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string = 'Username';
  email: string = 'example@abc.com';
  image: string = 'assets/imgs/undraw_profile_pic_ic5t.svg'
  defaultTab: string = 'posts';


  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage, private platform: Platform, private afAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    if (this.platform.is('cordova')) {
      this.nativeStorage.getItem('user')
        .then(
          (data) =>{
            this.username = data.name;
            this.email = data.email;
            // this.image = data.photoURL
            this.presentToast();
          },
          error => console.error(error)
        );
    }else{
      this.presentToast();
    }
  }

  presentToast() {
    let msg;
    if (this.platform.is('cordova')) {
      msg = "Logged in as " + this.username + " successfully."
    }else{
      msg = 'Logged in successfully.';
    }
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  logOut() {
    let loading = this.loadingCtrl.create({
      content: 'Logging Out',
    });
    loading.present();
    setTimeout(()=>{
      this.nativeStorage.remove('user');
      this.afAuth.auth.signOut();
      this.username = 'Username';
      this.email = 'example@abc.com';
      this.image = 'assets/imgs/undraw_profile_pic_ic5t.svg'
      loading.dismiss();
      const toast = this.toastCtrl.create({
        message: 'Logged Out',
        duration: 1500
      });
      toast.present();
    },1500)
  }

  goToSettings(){
    this.navCtrl.push(SettingsPage);
  }

  goToNotifications(){
    
  }

  search(){
    
  }

  goToHistory(){
    this.navCtrl.push(HistoryPage);
  }

}
