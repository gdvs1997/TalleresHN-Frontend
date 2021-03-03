import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarTipoUsuarioPage } from './seleccionar-tipo-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarTipoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarTipoUsuarioPageRoutingModule {}
