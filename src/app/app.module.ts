import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ForumsPage } from '../pages/forums/forums'
import { DashBoardPage } from '../pages/dash-board/dash-board'
import { CalendarPage } from '../pages/calendar/calendar'
import { DiscoverPage } from '../pages/discover/discover'
import { SettingsPage } from '../pages/settings/settings'
import { AssignmentsPage } from '../pages/assignments/assignments'
import { UserloginPage } from '../pages/userlogin/userlogin'
import { UserSignUpPage } from '../pages/user-sign-up/user-sign-up'
import { IntroPage } from '../pages/intro/intro';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ForumsPage,
    DashBoardPage,
    CalendarPage,
    DiscoverPage,
    SettingsPage,
    AssignmentsPage,
    UserloginPage,
    UserSignUpPage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ForumsPage,
    DashBoardPage,
    CalendarPage,
    DiscoverPage,
    SettingsPage,
    AssignmentsPage,
    UserloginPage,
    UserSignUpPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
