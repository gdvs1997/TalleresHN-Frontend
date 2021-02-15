import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioCitaPage } from './formulario-cita.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioCitaPageRoutingModule {}
