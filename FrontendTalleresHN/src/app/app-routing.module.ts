import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'seleccionar-tipo-usuario',
    loadChildren: () => import('./pages/seleccionar-tipo-usuario/seleccionar-tipo-usuario.module').then( m => m.SeleccionarTipoUsuarioPageModule)
  },
  {
    path: 'registro-clientes',
    loadChildren: () => import('./pages/registro-clientes/registro-clientes.module').then( m => m.RegistroClientesPageModule)
  },
  {
    path: 'registro-talleres',
    loadChildren: () => import('./pages/registro-talleres/registro-talleres.module').then( m => m.RegistroTalleresPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
