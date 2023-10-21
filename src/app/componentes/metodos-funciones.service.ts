import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { MetodosSqliteService } from './metodos-sqlite.service';

@Injectable({
  providedIn: 'root'
})
export class MetodosFuncionesService {
  
  constructor(private toastController: ToastController,private router: Router,private database: MetodosSqliteService) { }

  
  vistaRecuperar(){
    return this.router.navigate(['/recuperar-contrasenna'])
  };

  vistaLogin(){
    return this.router.navigate(['/login'])
    
  }

  validarCredenciales(Data: string, Data1: string): boolean {
    
    // Buscar si las credenciales coinciden con la lista de usuarios válidos
    const usuarioValido = this.database.validarYAutenticarUsuario(Data,Data1)
  
    // Si se encontró un usuario válido, retornar true; de lo contrario, false.
    return !!usuarioValido;
  }


  capturarUsuario(usuario: string): void {
    localStorage.setItem('usuario', usuario);
  }

  obtenerUsuario(): string | null {
    return localStorage.getItem('usuario');
  }
  
  async login(usuarioIngresado: string, contraseñaIngresada: string) {

      // Validar las credenciales
      const credencialesValidas = this.validarCredenciales(usuarioIngresado, contraseñaIngresada);
      const idUsuario = this.database.validarYAutenticarUsuario(usuarioIngresado, contraseñaIngresada)
      // Tomamos el usuario para enviarlo a la pagina Home
      const navigationExtras: NavigationExtras = {
        state: { username: usuarioIngresado ,id: idUsuario},
      };
    
      if (credencialesValidas) {
        const toast = await this.toastController.create({
          message: 'Bienvenid@ de vuelta, ' + usuarioIngresado + '.',
          duration: 2000
        });
        this.capturarUsuario(usuarioIngresado);
        this.router.navigate(['/home'], navigationExtras);
        await toast.present();
      } else {
        const toast = await this.toastController.create({
          message: 'Credenciales Inválidas. Por favor inténtalo nuevamente.',
          duration: 2000
        });
        await toast.present();
      }
    
    }


  async validarCorreo(Data: string): Promise<boolean> {

    // Aquí se realiza la validación del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/;
    const correoValido = emailRegex.test(Data);
  
    // Proceso de validacion 
    if (correoValido) {
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
    // Devuelve true si el correo es válido, false si no lo es
    return correoValido;
    
  } 

  
}