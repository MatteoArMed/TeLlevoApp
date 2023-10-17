import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
})
export class CertificacionesComponent  implements OnInit {

  constructor() { 
    const state = window.history.state;
    if (state && state.username) {
      this.username = state.username;
    }
  }

  ngOnInit() {}

  username: string = '';


}
