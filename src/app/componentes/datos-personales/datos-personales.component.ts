import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetodosSqliteService, User } from '../metodos-sqlite.service';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss'],
})
export class DatosPersonalesComponent  implements OnInit {

  users = this.database.getUsers();
  newUsername = '';
  username: string = '';
  edad: number = 0;



  constructor(private router: Router,private database: MetodosSqliteService) { 
    const state = window.history.state;
    if (state && state.username) {
      this.username = state.username;
    }
  }

  ngOnInit() {}

  async CrudAgregar(){
    await this.database.AgregarUsuario(this.newUsername);
    this.newUsername = '';
  }

  CrudModificar(user: User){
    const active = user.active ? 1: 0;
    this.database.ModificarUsuario(user.id.toString(),active)
  }

  CrudEliminar(user: User){
    const active = user.active ? 1:0;
    this.database.EliminarUsuario(active);
  }


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
