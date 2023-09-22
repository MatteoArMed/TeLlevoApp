import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlancoPageRoutingModule } from './blanco-routing.module';

import { BlancoPage } from './blanco.page';
import { MenuComponent } from '../menu/menu.component';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlancoPageRoutingModule
  ],
  declarations: [BlancoPage,MenuComponent,InicioSesionComponent,]
})
export class BlancoPageModule {
}
