import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent  implements OnInit {
  constructor(private router: Router, ) { }

  ngOnInit() {}
  

    // public lista_rutas: ListaRutas[] = [
    //   { name: 'Inicio', ruta: '/', icon: 'home-outline'},
    //   { name: 'Contacto', ruta: '/', icon: 'person-circle'},

    // ]
  


  
}
