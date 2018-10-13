import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { DashBoardPage } from '../dash-board/dash-board'
import { CalendarPage } from '../calendar/calendar'
import { DiscoverPage } from '../discover/discover'
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  slides: any;


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
    this.selectedSegment = 'first';
    this.slides = [
      {
        id: "following",
        title: "Following"
      },
      {
        id: "posts",
        title: "Posts"
      },
      {
        id: "chats",
        title: "Messages"
      }
    ];
  }

  signOut(){
    this.nativeStorage.remove('user');
  }

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    const currentSlide = this.slides[slider.getActiveIndex()];
    if(currentSlide) this.selectedSegment = currentSlide.id;
}
}
