import { Component, OnInit } from '@angular/core';

import { MetodosFuncionesService } from 'src/app/componentes/metodos-funciones.service'; 

@Component({
  selector: 'app-recuperar-contrasenna',
  templateUrl: './recuperar-contrasenna.page.html',
  styleUrls: ['./recuperar-contrasenna.page.scss'],
})
export class RecuperarContrasennaPage implements OnInit {

  constructor(private metodos: MetodosFuncionesService) { }

  ngOnInit() {
  }

  correoElectronico: string = '';

  async vistaLogin(){
    return this.metodos.vistaLogin()
  }

  async validacionCorreo(){

    const resultado = await this.metodos.validarCorreo(this.correoElectronico);
  
    if (resultado) {
      this.metodos.validarCorreo(this.correoElectronico)
      this.metodos.vistaLogin()
    } 
  }





}
