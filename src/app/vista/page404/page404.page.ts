import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular'; // Importa AnimationController

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
    private activeroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeroute.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
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

    // Limpiar los campos
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }

  // Función para mostrar la información en un mensaje emergente
  mostrarInformacion() {
 
    (this.nombre!="" && this.apellido!="") &&
    this.alertaMensaje("Usuario", "Su nombre es " + this.nombre + " " + this.apellido);
  }

  async alertaMensaje(titulo:string, mensaje:string){
    const alerta = await this.alertController.create(({
      header:titulo,
      message:mensaje,
      buttons:['Okey']
    }));
    await alerta.present();
  }
  

  selectedSegment: string = 'home'; // Inicializa con el valor predeterminado
  
  segmentChanged() {
    // Aquí, puedes realizar la navegación basada en el segmento seleccionado
    switch (this.selectedSegment) {
      case 'heart':   // <== Corresponde al value
        this.router.navigate(['heart']);
        break;
      case 'home':
        this.router.navigate(['home']);
        break;
      case 'person': 
        this.router.navigate(['person']);
        break;
      default:
        // En caso de no ser alguno de lo que esten, no hace nada.
        break;
    }
  }
}
