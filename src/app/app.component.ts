import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { MetodosFuncionesService } from './componentes/metodos-funciones.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(private toastController: ToastController, private router: Router,private metodos: MetodosFuncionesService) {}

    // Lista de usuarios válidos y sus contraseñas
    usuariosValidos = [
      { usuario: 'data@duocuc.cl', contraseña: '1234' },
      { usuario: 'Tais', contraseña: '1234' },
      { usuario: 'Matteo', contraseña: '1234'},
    ];
    
    
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
