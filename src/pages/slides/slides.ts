import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { UniversesPage } from '../universes/universes';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openUniverses(){
    this.navCtrl.push(UniversesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}
