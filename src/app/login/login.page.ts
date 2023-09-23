import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  homePage = HomePage;

  username: string = ''
  password: string = ''

  constructor(private router: Router, private componente: AppComponent,) { }

  ngOnInit() {
  }


}
