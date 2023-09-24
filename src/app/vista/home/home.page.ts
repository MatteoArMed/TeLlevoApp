import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


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
    this.activeroute.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
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
