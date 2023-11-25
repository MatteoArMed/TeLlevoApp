import { Component } from '@angular/core';

import { MetodosFuncionesService } from './componentes/metodos-funciones.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(private metodos: MetodosFuncionesService,) {
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
