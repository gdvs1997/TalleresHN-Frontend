import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarCitaPage } from './gestionar-cita.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarCitaPageRoutingModule {}
