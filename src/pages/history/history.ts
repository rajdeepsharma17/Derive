import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  clearHistory(){
    let loading = this.loadingCtrl.create({
      content: 'Cleaning History',
    });
    loading.present();
    setTimeout(()=>{
      loading.dismiss();
      this.presentToast();
    },2000)
  }

  presentToast() {
    let msg = 'History Cleared';
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 1500
    });
    toast.present();
  }

}
