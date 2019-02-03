import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlidesPage } from '../slides/slides';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public openSlides(){
    this.navCtrl.push(SlidesPage);
  }

}
