import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MetodosFuncionesService } from 'src/app/componentes/metodos-funciones.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private metodos: MetodosFuncionesService,private toastController: ToastController)  { }



  username: string = '';
  password: string = '';
  recordar: boolean = false;

  ngOnInit() {

    // this.database.initializePlugin();

  }
  


  async FunciondeValidacion(){

    if(this.username === '' && this.password === ''){
      const toast = await this.toastController.create({
        message: 'Los campos no pueden estar vacios, favor ingresa datos.',
        duration: 2000
      });
      await toast.present();
    }else if(this.username !== '' && this.password !== ''){
      const username = this.username; 
      const contraseña = this.password;
      this.metodos.login(username,contraseña);
      if(this.recordar){
        this.password = '';
      }else{
        this.username = '';
        this.password = '';
      }
    }
    else{
      const toast = await this.toastController.create({
        message: 'Correo o contraseña invalidos, favor intentar nuevamente.',
        duration: 2000
      });
      await toast.present();
    }

  }

  async vistaRecuperar(){
    this.router.navigate(['recuperar-contrasenna'])
  }

}