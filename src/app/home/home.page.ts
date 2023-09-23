import { Component } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  LoginPage = LoginPage;
  username: string = ''
  selectedSegment: string = 'home'; // Inicializa con el valor predeterminado

  constructor(private router: Router) {}
  
  segmentChanged() {
    // Aquí, puedes realizar la navegación basada en el segmento seleccionado
    switch (this.selectedSegment) {
      case 'heart':   // <== Corresponde al value
        // Navega a la página correspondiente
        this.router.navigate(['/home']);
        break;
      case 'home':
        this.router.navigate(['/login']);
        break;
      case 'person': 
        this.router.navigate(['/login']);
        break;
      default:
        // En caso de no ser alguno de lo que esten, no hace nada.
        break;
    }
  }
}