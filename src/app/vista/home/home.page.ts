import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  constructor( private metodos: AppComponent) {
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
