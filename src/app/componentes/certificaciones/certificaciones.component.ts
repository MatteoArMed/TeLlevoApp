import { Component, OnInit } from '@angular/core';
import { MetodosSqliteService } from '../metodos-sqlite.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
})
export class CertificacionesComponent  implements OnInit {

  constructor(private database: MetodosSqliteService) { 
    const state = window.history.state;
    if (state && state.username) {
      this.username = state.username;
    }
  }

  ngOnInit() {}

  username: string = '';
  newUsername: string = '';
  Nombre: string =  '';
  Apellido: string  = '';
  Carrera: string  = '';
  Sede: string  = '';
  Contrasenna: string  = '';

  async LimpiarCampos(){
    this.Nombre = '';
    this.Apellido = '';
    this.Carrera = '';
    this.Sede = '';
    this.Contrasenna = '';
  }


  async CrearUsuario(){
    this.database.CrearUsuario(this.Contrasenna,this.Nombre,this.Apellido,this.Carrera,this.Sede);
    this.LimpiarCampos();
  }



}