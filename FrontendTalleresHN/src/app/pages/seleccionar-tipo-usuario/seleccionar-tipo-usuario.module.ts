import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarTipoUsuarioPageRoutingModule } from './seleccionar-tipo-usuario-routing.module';

import { SeleccionarTipoUsuarioPage } from './seleccionar-tipo-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarTipoUsuarioPageRoutingModule
  ],
  declarations: [SeleccionarTipoUsuarioPage]
})
export class SeleccionarTipoUsuarioPageModule {}
