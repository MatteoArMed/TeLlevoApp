import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ''
  password: string = ''

  constructor(private router: Router, private componente: AppComponent,) { }

  ngOnInit() {
  }

  async CambioVentanaRecuperar(){
    this.router.navigate(['/recuperar-contrasenna'])
  }
}
