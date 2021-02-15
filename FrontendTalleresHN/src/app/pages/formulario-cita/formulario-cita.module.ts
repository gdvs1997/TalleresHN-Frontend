import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioCitaPageRoutingModule } from './formulario-cita-routing.module';

import { FormularioCitaPage } from './formulario-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioCitaPageRoutingModule
  ],
  declarations: [FormularioCitaPage]
})
export class FormularioCitaPageModule {}
