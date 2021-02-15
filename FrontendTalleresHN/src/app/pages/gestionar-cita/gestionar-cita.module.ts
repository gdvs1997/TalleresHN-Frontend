import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarCitaPageRoutingModule } from './gestionar-cita-routing.module';

import { GestionarCitaPage } from './gestionar-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarCitaPageRoutingModule,
  ],
  declarations: [GestionarCitaPage]
})
export class GestionarCitaPageModule {}
