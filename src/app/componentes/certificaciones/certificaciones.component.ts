import { Component, OnInit } from '@angular/core';
import { MetodosSqliteService, User } from '../metodos-sqlite.service';

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
  users = this.database.getUsers();
  username: string = '';
  newUsername: string = '';
  Nombre = '';
  Apellido = '';
  Carrera = '';
  Horario = '';
  Sede = '';

  async LimpiarCampos(){
    this.Nombre = '';
    this.Apellido = '';
    this.Carrera = '';
    this.Horario = '';
    this.Sede = '';
  }

  async Ingresar(){
    await this.database.IngresarDatos(1,1,this.Nombre,this.Apellido,this.Carrera,this.Horario,this.Sede)
  }

  async CrudAgregar(){
    await this.database.AgregarUsuario(this.newUsername);
    this.newUsername = '';
  }

  CrudModificar(user: User){
    const active = user.active ? 1: 0;
    this.database.ModificarUsuario(user.id.toString(),active)
  }

  CrudEliminar(user: User){
    const active = user.active ? 1:0;
    this.database.EliminarUsuario(active);
  }

}
