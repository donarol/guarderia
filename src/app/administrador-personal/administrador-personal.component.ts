import { Component, OnInit, Input } from '@angular/core';
import { Administrador } from '../Interfaces/administrador';

@Component({
  selector: 'app-administrador-personal',
  templateUrl: './administrador-personal.component.html',
  styleUrls: ['./administrador-personal.component.css']
})
export class AdministradorPersonalComponent implements OnInit {
  @Input() administrador:Administrador;
  constructor() { }

  ngOnInit() {
    console.log("el admin es "+this.administrador);
  }

}
