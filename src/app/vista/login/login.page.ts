import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { MetodosFuncionesService } from 'src/app/componentes/metodos-funciones.service';
import { MetodosSqliteService } from 'src/app/componentes/metodos-sqlite.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private componente: AppComponent,private router: Router,private metodos: MetodosFuncionesService, private database: MetodosSqliteService) { }

  


  username: string = '';
  password: string = '';

  ngOnInit() {

    this.database.initializePlugin();

  }
  


  async FunciondeValidacion(){

    const username = this.username; 
    const contraseña = this.password;
    this.componente.validacionLogin(username,contraseña);
    this.password = '';

  }

  async vistaRecuperar(){
    this.router.navigate(['recuperar-contrasenna'])
  }

}