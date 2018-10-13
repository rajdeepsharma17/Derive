import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from '@ionic-native/native-storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firbase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PostPage } from '../pages/post/post';

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
    IntroPage,
    PostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage,
    PostPage
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
