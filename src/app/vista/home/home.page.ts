import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { RecuperarContrasennaPage } from '../recuperar-contrasenna/recuperar-contrasenna.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  constructor(private router: Router,private activeroute: ActivatedRoute, private metodos: AppComponent) {
    const state = window.history.state;
    if (state && state.username) {
      this.username = state.username;
    }
  }
  
  username: string = ''
  
  ngOnInit() {

  }
  
  async vistahome(){
    return this.metodos.vistaLogin()
    
  }

  selectedSegment: string = 'home'; // Inicializa con el valor predeterminado
  


}
