import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'citas',
        loadChildren: () => import('../gestionar-cita/gestionar-cita.module').then( m => m.GestionarCitaPageModule)
      },
      {
        path: 'options',
        loadChildren: () => import('../options/options.module').then(m => m.OptionsPageModule)
      },
      {
        path: 'reservar-cita',
        loadChildren: () => import('../formulario-cita/formulario-cita.module').then(m => m.FormularioCitaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
