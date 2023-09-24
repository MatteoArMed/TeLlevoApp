import { Component,OnInit } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.page.html',
  styleUrls: ['./page404.page.scss'],
})

export class Page404Page implements OnInit {
  
  constructor(
    private animationCtrl: AnimationController,
    private alertController: AlertController,
    ) { 
  }

  carro: string = ''

  async Animaciones(){

    const animation = this.animationCtrl
    .create()
    .addElement(document.querySelectorAll('carro'))
    .fromTo('transform', 'translateX(0%)', 'translateX(100%)')
    .duration(3000); // Duración de 1 segundo
    
    await animation.play();
  
    this.carro = ''
  }

  async alertaMensaje(titulo:string, mensaje:string){
    const alerta = await this.alertController.create(({
      header:titulo,
      message:mensaje,
      buttons:['Okey']
    }));
    await alerta.present();
  }

  ngOnInit() {
  }

}
