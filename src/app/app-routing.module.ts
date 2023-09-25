import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PerroGuardianGuard } from './perro-guardian.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./vista/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./vista/home/home.module').then( m => m.HomePageModule),
    canActivate:[PerroGuardianGuard]
  },
  {
    path: 'recuperar-contrasenna',
    loadChildren: () => import('./vista/recuperar-contrasenna/recuperar-contrasenna.module').then( m => m.RecuperarContrasennaPageModule)
  },
  {
    path: 'page404',
    loadChildren: () => import('./vista/page404/page404.module').then( m => m.Page404PageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
