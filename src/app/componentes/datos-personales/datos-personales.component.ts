import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss'],
})
export class DatosPersonalesComponent  implements OnInit {

  username: string = '';
  
  constructor(private router: Router) { 
    const state = window.history.state;
    if (state && state.username) {
      this.username = state.username;
    }
  }

  ngOnInit() {}

  
  selectedSegment: string = 'person'; // Inicializa con el valor predeterminado

  segmentChanged() {
    // Aquí, puedes realizar la navegación basada en el segmento seleccionado
    switch (this.selectedSegment) {
      case 'heart':   // <== Corresponde al value
        // Navega a la página correspondiente
        this.router.navigate(['/']);
        break;
      case 'home':
        this.router.navigate(['/']);
        break;
      case 'person': 
        this.router.navigate(['/']);
        break;
      default:
        // En caso de no ser alguno de lo que esten, no hace nada.
        break;
    }
  }
}
