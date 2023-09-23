import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { LoginPage } from './login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private toastController: ToastController) {}
  
  componente = LoginPage;

    // Funcion para verificar que el correo ingresado sea del dominio de duocuc
    async validarCorreo(Data: string){
      // Aqui se valida que el texto ingresado contenga los caracteres especificos requeridos
      const emailRegex = /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/;
      
      // Aqui se valida que el correo cumpla con lo establecido devolviendo un valor boolean
      function verificarCorreo(Data: string): boolean {
        return emailRegex.test(Data);
      }
          // Aqui es donde se realiza la validacion del correo electronico
      const correoValido = verificarCorreo(Data);
      if (correoValido){
        const toast = await this.toastController.create({
          message: 'Correo válido, puedes entrar.',
          duration: 2000
        });
        await toast.present();
      } else {
        const toast = await this.toastController.create({
          message: 'Correo inválido. Por favor inténtalo nuevamente.',
          duration: 2000
        });
        await toast.present();
      }
    }

  }
