import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-barra-principal',
  templateUrl: './barra-principal.component.html',
  styleUrls: ['./barra-principal.component.scss'],
})
export class BarraPrincipalComponent  implements OnInit {

  username: string=''

  constructor(private router: Router,) { }

  ngOnInit() {}

  async vistaLogin(){
    this.router.navigate(['/login'])
  }
  async vistaHome(){
    this.router.navigate(['/home'])
  }

}
