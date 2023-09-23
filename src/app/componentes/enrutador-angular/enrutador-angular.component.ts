import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrutador-angular',
  templateUrl: './enrutador-angular.component.html',
  styleUrls: ['./enrutador-angular.component.scss'],
})
export class EnrutadorAngularComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
