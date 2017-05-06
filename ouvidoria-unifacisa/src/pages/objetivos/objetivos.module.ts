import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Objetivos } from './objetivos';

@NgModule({
  declarations: [
    Objetivos,
  ],
  imports: [
    IonicPageModule.forChild(Objetivos),
  ],
  exports: [
    Objetivos
  ]
})
export class ObjetivosModule {}
