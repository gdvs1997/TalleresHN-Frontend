import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroTalleresPageRoutingModule } from './registro-talleres-routing.module';

import { RegistroTalleresPage } from './registro-talleres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroTalleresPageRoutingModule
  ],
  declarations: [RegistroTalleresPage]
})
export class RegistroTalleresPageModule {}
