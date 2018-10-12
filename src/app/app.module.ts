import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from '@ionic-native/native-storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashBoardPage } from '../pages/dash-board/dash-board'
import { CalendarPage } from '../pages/calendar/calendar'
import { DiscoverPage } from '../pages/discover/discover'
import { SettingsPage } from '../pages/settings/settings'
import { IntroPage } from '../pages/intro/intro';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firbase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

export const firebaseConfig = {
  apiKey: "AIzaSyCxesZjFy_sGzQMthXBB3vnHNOqrlegBDE",
  authDomain: "derive-28706.firebaseapp.com",
  databaseURL: "https://derive-28706.firebaseio.com",
  projectId: "derive-28706",
  storageBucket: "derive-28706.appspot.com",
  messagingSenderId: "46695463328"
}

firbase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashBoardPage,
    CalendarPage,
    DiscoverPage,
    SettingsPage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashBoardPage,
    CalendarPage,
    DiscoverPage,
    SettingsPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    AuthServiceProvider
  ]
})
export class AppModule {}
