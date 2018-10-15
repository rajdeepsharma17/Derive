import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private document: DocumentViewer) {
  }

  ionViewDidLoad() {
    
  }

  ngOnInit(){
    // const options: DocumentViewerOptions = {
    //   title: 'My PDF'
    // }
    // console.log("Entered")
    // this.document.viewDocument('assets/test.pdf', 'application/pdf', options)
  }

}
