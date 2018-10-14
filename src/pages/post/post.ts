import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  public elements = [
    { no: 1 },
    { no: 2 },
    { no: 3 },
    { no: 4 },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
  }

}
