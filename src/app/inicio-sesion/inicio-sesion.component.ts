import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent  implements OnInit {


  username: string = ''; // Variable para almacenar el nombre de usuario ingresado
  password: string = ''; // Variable para almacenar la contraseña ingresada

  // Lista de usuarios válidos y sus contraseñas
  usuariosValidos = [
    { usuario: 'Prueba', contraseña: '1234' },
    { usuario: 'Tais', contraseña: '1234' },
  ];

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {
  }

  async login() {
    // Obtener los valores ingresados por el usuario
    const usuarioIngresado = this.username;
    const contraseñaIngresada = this.password;

    // Validar las credenciales
    const credencialesValidas = this.validarCredenciales(usuarioIngresado, contraseñaIngresada);

    if (credencialesValidas) {
      this.router.navigate(['/home'], { queryParams: { username: usuarioIngresado } });
    } else {
      this.mostrarMensajeError();
    }
  }

  async CambioVentanaRecuperar(){
    this.router.navigate(['/recuperar-contrasenna'])
  }

  validarCredenciales(usuarioIngresado: string, contraseñaIngresada: string): boolean {
    // Buscar si las credenciales coinciden con la lista de usuarios válidos
    const usuarioValido = this.usuariosValidos.find(usuario => {
      return usuario.usuario === usuarioIngresado && usuario.contraseña === contraseñaIngresada;
    });

    // Si se encontró un usuario válido, retornar true; de lo contrario, false.
    return !!usuarioValido;
  }

  async mostrarMensajeError() {
    const toast = await this.toastController.create({
      message: 'Credenciales incorrectas. Inténtalo nuevamente.',
      duration: 2000
    });
    await toast.present();
  }
}


