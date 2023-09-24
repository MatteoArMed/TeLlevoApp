import { Component, OnInit } from '@angular/core';

import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private componente: AppComponent,) { }

  username: string = '';
  password: string = '';

  ngOnInit() {
  }
  

  async FunciondeValidacion(){

    const username = this.username; 
    const contraseña = this.password;

    this.componente.validacionLogin(username,contraseña);
  }

  async vistaRecuperar(){
    this.componente.vistaRecuperar();
  }

}