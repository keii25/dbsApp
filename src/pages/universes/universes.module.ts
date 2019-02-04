import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UniversesPage } from './universes';

@NgModule({
  declarations: [
    UniversesPage,
  ],
  imports: [
    IonicPageModule.forChild(UniversesPage),
  ],
})
export class UniversesPageModule {}
