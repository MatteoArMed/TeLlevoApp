import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetodosSqliteService, Usuarios } from '../metodos-sqlite.service';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss'],
})
export class DatosPersonalesComponent  implements OnInit {

  newUsername = '';
  username: string = '';
  id: number = 0;
  toastController: any;
  
  constructor(private router: Router,private database: MetodosSqliteService) { 
    const state = window.history.state;
    if (state && state.username && state.id) {
      this.username = state.username;
      this.id = state.id;
    }
  }
  
  usuarios: Usuarios[] = [];

  async ngOnInit() {
    try {
      this.usuarios = await this.database.loadUsers();
      if (!this.usuarios) {
        console.error('El usuario no se encontró en la base de datos.');
      }
    } catch (error) {
      console.error('Error al cargar usuarios en el componente:', error);
    }
  }

  async eliminarUsuario(id: number) {
    try {
      // Lógica para eliminar el usuario con el ID proporcionado, por ejemplo:
      await this.database.EliminarUsuario(id);
  
      // Después de eliminar el usuario, actualiza la lista de usuarios
      this.usuarios = await this.database.loadUsers();
  
      const toast = await this.toastController.create({
        message: 'Usuario eliminado correctamente.',
        duration: 2000
      });
      await toast.present();
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      const toast = await this.toastController.create({
        message: 'Error al eliminar usuario. Por favor, inténtalo nuevamente.',
        duration: 2000
      });
      await toast.present();
    }
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
