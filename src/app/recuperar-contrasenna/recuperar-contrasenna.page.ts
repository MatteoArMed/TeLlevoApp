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

  async CambioVentana(){
    this.router.navigate(['/login'])
  }

  async mostrarMensajeError() {
    const toast = await this.toastController.create({
      message: 'Credenciales incorrectas. Inténtalo nuevamente.',
      duration: 2000
    });
    await toast.present();
  }
}
