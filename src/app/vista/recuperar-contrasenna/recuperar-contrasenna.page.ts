import { Component, OnInit } from '@angular/core';

import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-recuperar-contrasenna',
  templateUrl: './recuperar-contrasenna.page.html',
  styleUrls: ['./recuperar-contrasenna.page.scss'],
})
export class RecuperarContrasennaPage implements OnInit {

  constructor(private metodos: AppComponent) { }

  ngOnInit() {
  }

  correoElectronico: string = '';

  async vistaLogin(){
    return this.metodos.vistaLogin()
  }

  async validaCorreo(){

    const resultado = await this.metodos.validaCorreo(this.correoElectronico);
  
    if (resultado) {
      this.metodos.validaCorreo(this.correoElectronico)
      this.metodos.vistaLogin()
    } 
  }





}
