import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  constructor(private router: Router,private activeroute: ActivatedRoute) {
    const state = window.history.state;
    if (state && state.username) {
      this.username = state.username;
    }
  }
  username: string = ''

  ngOnInit() {

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
