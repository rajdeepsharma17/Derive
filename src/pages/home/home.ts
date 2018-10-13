import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashBoardPage } from '../dash-board/dash-board'
import { CalendarPage } from '../calendar/calendar'
import { DiscoverPage } from '../discover/discover'
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  forums: any;
  dashboard: any;
  calendar: any;
  discover: any;
  settings: any;
  assignments: any;


  constructor(public navCtrl: NavController,private nativeStorage: NativeStorage) {
    this.dashboard = DashBoardPage;
    this.calendar = CalendarPage;
    this.discover = DiscoverPage;
  }

  signOut(){
    this.nativeStorage.remove('user');
  }
}
