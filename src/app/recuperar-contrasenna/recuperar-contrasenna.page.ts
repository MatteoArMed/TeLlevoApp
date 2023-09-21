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

  correoElectronico: string = '';

  async CambioVentana(){
    this.router.navigate(['/login'])
  }

  async mostrarMensajeError() {
    if (this.correoElectronico.trim() === ''){
      const toast = await this.toastController.create({
        message: 'Credenciales incorrectas. Por favor inténtalo nuevamente.',
        duration: 2000
      });
      await toast.present();
    } else {
      this.CambioVentana()
      const toast = await this.toastController.create({
        message: 'Se ha enviado un correo con la nueva contraseña',
        duration: 2000
      });
      await toast.present();
    }
  }
}
