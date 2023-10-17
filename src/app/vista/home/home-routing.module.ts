import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DatosPersonalesComponent } from 'src/app/componentes/datos-personales/datos-personales.component';
import { CertificacionesComponent } from 'src/app/componentes/certificaciones/certificaciones.component';
import { ExperienciaComponent } from 'src/app/componentes/experiencia/experiencia.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'datos',
        component: DatosPersonalesComponent
      },
      {
        path:'certificaciones',
        component: CertificacionesComponent
      },
      {
        path: 'experiencia',
        component: ExperienciaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
