import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ToastController } from '@ionic/angular';

import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private router: Router, private componente: AppComponent,private toastController: ToastController,) { }

  homePage = HomePage;


  username: string = '';
  password: string = '';

  usuariosValidos = [
    { usuario: 'duoc@duocuc.cl', contraseña: '1234' },
    { usuario: 'Tais', contraseña: '1234' },
  ];

  ngOnInit() {
  }
  

  async FunciondeValidacion(){

    const username = this.username; 
    const contraseña = this.password;

    this.componente.login(username,contraseña);

  }
}


  
  