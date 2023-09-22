import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contrasenna',
  templateUrl: './recuperar-contrasenna.page.html',
  styleUrls: ['./recuperar-contrasenna.page.scss'],
})
export class RecuperarContrasennaPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {
  }

  // Se declara la variable correo para que ngModel la reconozca desde HTML
  correoElectronico: string = '';

  
  async CambioVentana(){
    this.router.navigate(['/login'])
  }
  
  // Funcion para verificar que el correo ingresado sea del dominio de duocuc
  async validarCorreo(){
    // Aqui se valida que el texto ingresado contenga los caracteres especificos requeridos
    const emailRegex = /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/;
    
    // Aqui se valida que el correo cumpla con lo establecido devolviendo un valor boolean
    function verificarCorreo(correoElectronico: string): boolean {
      return emailRegex.test(correoElectronico);
    }

    // Aqui es donde se realiza la validacion del correo electronico
    const correoValido = verificarCorreo(this.correoElectronico);
    if (correoValido){
      this.CambioVentana()
      const toast = await this.toastController.create({
        message: 'Se ha enviado un correo con la nueva contraseña',
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
