import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { LoginPage } from './login/login.page';
import { MetodosFuncionesService } from './componentes/metodos-funciones.service';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {
  constructor(private toastController: ToastController, private router: Router,) {}
  
  componente = LoginPage;
  componenteHome = HomePage;
  
    // Lista de usuarios válidos y sus contraseñas
    usuariosValidos = [
      { usuario: 'data@duocuc.cl', contraseña: '1234' },
      { usuario: 'Tais', contraseña: '1234' },
      { usuario: 'Matteo', contraseña: '1234'},
    ];
    


    validarCredenciales(Data: string, Data1: string): boolean {
      // Buscar si las credenciales coinciden con la lista de usuarios válidos
      const usuarioValido = this.usuariosValidos.find(usuario => {
        return usuario.usuario === Data && usuario.contraseña === Data1;
      });
    
      // Si se encontró un usuario válido, retornar true; de lo contrario, false.
      return !!usuarioValido;
    }

    async login(usuarioIngresado: string,contraseñaIngresada: string) {

      // Validar las credenciales
      const credencialesValidas = this.validarCredenciales(usuarioIngresado, contraseñaIngresada);
  
      if (credencialesValidas) {
        const toast = await this.toastController.create({
          message: 'Credenciales válidas. Bienvenido de vuelta.',
          duration: 2000
        });
        this.router.navigate(['/login'], { queryParams: { username: usuarioIngresado } });
        await toast.present();
      } else {
        const toast = await this.toastController.create({
          message: 'Credenciales Inválidas. Por favor inténtalo nuevamente.',
          duration: 2000
        });
        await toast.present();      }
    }

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
          message: 'Correo válido.',
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
