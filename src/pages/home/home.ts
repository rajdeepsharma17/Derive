import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  main: string;

  constructor(public navCtrl: NavController,private nativeStorage: NativeStorage) {
    this.main = 'posts';
  }

  signOut(){
    this.nativeStorage.remove('user');
  }
}
