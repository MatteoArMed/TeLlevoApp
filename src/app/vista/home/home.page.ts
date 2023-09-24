import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface QueryParams {
  username?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  constructor(private router: Router,private activeroute: ActivatedRoute) {
  }
  username: string = ''

  ngOnInit() {
    this.activeroute.queryParams.subscribe((queryParams: QueryParams) => {
      this.username = queryParams['username'] || '';
    });
  }
  
  selectedSegment: string = 'home'; // Inicializa con el valor predeterminado

  
  
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
