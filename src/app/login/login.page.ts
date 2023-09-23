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

  homePage = HomePage;


  username: string = ''
  password: string = ''

  usuariosValidos = [
    { usuario: 'duoc@duocuc.cl', contraseña: '1234' },
    { usuario: 'Tais', contraseña: '1234' },
  ];

  constructor(private router: Router, private componente: AppComponent,private toastController: ToastController,) { }

  ngOnInit() {
  }
  

  
  
  
  // Funcion para verificar que el correo ingresado sea del dominio de duocuc
  async validarCorreo(){
    // Aqui se valida que el texto ingresado contenga los caracteres especificos requeridos
    const emailRegex = /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/;
    
    // Obtener los valores ingresados por el usuario
    const usuarioIngresado = this.username;
    const contraseñaIngresada = this.password;
  
        // Validar las credenciales
        const credencialesValidas = this.validarCredenciales(usuarioIngresado, contraseñaIngresada);

        if (credencialesValidas) {
          this.router.navigate(['/home'], { queryParams: { username: usuarioIngresado } });
        } else {
          this.mostrarMensajeError;
        }
      // Aqui se valida que el correo cumpla con lo establecido devolviendo un valor boolean
      // function verificarCorreo(usuarioIngresado:any): boolean {
      //   return emailRegex.test(usuarioIngresado);
      // }
          // Aqui es donde se realiza la validacion del correo electronico
      // const correoValido = verificarCorreo(this.username);
      // if (correoValido){
      //   const toast = await this.toastController.create({
      //     message: 'Correo válido, puedes entrar.',
      //     duration: 2000
      //   });
      //   await toast.present();
      // } else {
      //   const toast = await this.toastController.create({
      //     message: 'Correo inválido. Por favor inténtalo nuevamente.',
      //     duration: 2000
      //   });
      //   await toast.present();
      // }
    }

    validarCredenciales(usuarioIngresado: string, contraseñaIngresada: string): boolean {
      // Buscar si las credenciales coinciden con la lista de usuarios válidos
      const usuarioValido = this.usuariosValidos.find(usuario => {
        return usuario.usuario === usuarioIngresado && usuario.contraseña === contraseñaIngresada;
      });
      // Si se encontró un usuario válido, retornar true; de lo contrario, false.
      return !!usuarioValido;
    }
    
    async mostrarMensajeError() {
      const toast = await this.toastController.create({
        message: 'Credenciales incorrectas. Inténtalo nuevamente.',
        duration: 2000
      });
      await toast.present();
    }
}
