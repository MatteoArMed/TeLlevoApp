import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular'; // Importa AnimationController

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(
    private route: ActivatedRoute,
    private toastController: ToastController,
    private animationCtrl: AnimationController // Agrega AnimationController
  ) {}

  ngOnInit() {
    // Obtener el nombre de usuario de los parámetros de la URL
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  // Función para limpiar los campos y aplicar animación
  async limpiarCampos() {
    // Animación para los campos nombre y apellido
    const animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll('.move-animation'))
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
      .duration(1000); // Duración de 1 segundo

    await animation.play();

    // Limpiar los campos
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }

  // Función para mostrar la información en un mensaje emergente
  async mostrarInformacion() {
    const mensaje = `Su nombre es: ${this.nombre}`;

    const toast = await this.toastController.create({
      header: 'Usuario',
      message: mensaje,
      duration: 5000, // Duración del mensaje emergente en milisegundos
      position: 'bottom', // Posición del mensaje emergente
    });

    await toast.present();
  }
}
