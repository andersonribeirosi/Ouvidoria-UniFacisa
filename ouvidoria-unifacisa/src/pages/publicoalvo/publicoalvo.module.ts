import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicoAlvo } from './publicoalvo';

@NgModule({
  declarations: [
    PublicoAlvo,
  ],
  imports: [
    IonicPageModule.forChild(PublicoAlvo),
  ],
  exports: [
    PublicoAlvo
  ]
})
export class PublicoalvoModule {}
