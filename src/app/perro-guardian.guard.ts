import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router, Navigation } from '@angular/router';

import { MetodosFuncionesService } from './componentes/metodos-funciones.service';


@Injectable({
  providedIn: 'root'
})
export class PerroGuardianGuard implements CanActivate {

  constructor(private userService: MetodosFuncionesService, private router: Router) {}
  canActivate(): boolean {
    const usuarioCapturado = Boolean(this.userService.obtenerUsuario());
  
    if (usuarioCapturado) {
      return true; // Usuario capturado, permitir acceso
    } else {
      this.router.navigate(['/page404']); // Usuario no capturado, redirigir a la página de error
      return false;
    }
  }
  
}
