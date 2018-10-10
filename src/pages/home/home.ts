import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForumsPage } from '../forums/forums';
import { DashBoardPage } from '../dash-board/dash-board'
import { CalendarPage } from '../calendar/calendar'
import { DiscoverPage } from '../discover/discover'
import { AssignmentsPage } from '../assignments/assignments'

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


  constructor(public navCtrl: NavController) {
    this.forums = ForumsPage;
    this.dashboard = DashBoardPage;
    this.calendar = CalendarPage;
    this.discover = DiscoverPage;
    this.assignments = AssignmentsPage;
  }

}
