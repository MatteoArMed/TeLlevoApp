import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
})
export class ExperienciaComponent  implements OnInit {

  constructor() {     
    const state = window.history.state;
    if (state && state.username) {
      this.username = state.username;
    }}

    username: string = '';
    
  ngOnInit() {}

}
