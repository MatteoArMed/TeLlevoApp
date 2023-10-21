import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { MetodosFuncionesService } from './componentes/metodos-funciones.service';

import { MetodosSqliteService } from './componentes/metodos-sqlite.service';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(private toastController: ToastController, private router: Router,private metodos: MetodosFuncionesService,private database: MetodosSqliteService,) {
  }

    // Validacion del servicio de validacion
    public validacionLogin (Data: string,Data2: string){
      
      
      return this.metodos.login(Data,Data2)
    }

    public vistaRecuperar(){
      return this.metodos.vistaRecuperar()
    }

    public validaCorreo(Data: string){
      return this.metodos.validarCorreo(Data)
    }

    public vistaLogin(){
      return this.metodos.vistaLogin()
    }



  }
