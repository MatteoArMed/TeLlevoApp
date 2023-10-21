import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular'; // Importa AnimationController

import { MetodosFuncionesService } from 'src/app/componentes/metodos-funciones.service';


@Component({
  selector: 'app-page404',
  templateUrl: './page404.page.html',
  styleUrls: ['./page404.page.scss'],
})

export class Page404Page implements OnInit {
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private animationCtrl: AnimationController, // Agrega AnimationController
    private alertController: AlertController,
    private activeroute: ActivatedRoute,
    private metodos: MetodosFuncionesService,
  ) {}

  ngOnInit() {
    this.activeroute.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  async vistaLogin(){
    this.metodos.vistaLogin()

  }
  // Función para limpiar los campos y aplicar animación
  async limpiarCampos() {
    // Animación para los campos nombre y apellido
    const animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll('.move-animation'))
      .fromTo('transform', 'translateX(0%)', 'translateX(100%)')
      .duration(1000); // Duración de 1 segundo

    await animation.play();

  }

}
