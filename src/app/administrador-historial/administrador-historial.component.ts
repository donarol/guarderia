import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-historial',
  templateUrl: './administrador-historial.component.html',
  styleUrls: ['./administrador-historial.component.css']
})
export class AdministradorHistorialComponent implements OnInit {
  areas:Array<any>=[{etiqueta:'todos',valor:'Todos'},
                   {etiqueta:'sucursal',valor:'Sucursal'},
                   {etiqueta:'turno',valor:'Turno'},
                   {etiqueta:'curso',valor:'Curso'}];
  constructor() { }

  ngOnInit() {
  }

}
