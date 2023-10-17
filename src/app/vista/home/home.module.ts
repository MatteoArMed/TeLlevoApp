import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { DatosPersonalesComponent } from 'src/app/componentes/datos-personales/datos-personales.component';
import { ExperienciaComponent } from 'src/app/componentes/experiencia/experiencia.component';
import { CertificacionesComponent } from 'src/app/componentes/certificaciones/certificaciones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    DatosPersonalesComponent,
    ExperienciaComponent,
    CertificacionesComponent
  ]
})
export class HomePageModule {}
