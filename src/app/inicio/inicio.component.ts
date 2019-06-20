import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  componentes:Array<any>=[{logo:"url",router:"inicio_datos",etiqueta:"Datos"},
                          {logo:"url",router:"inicio_cursos",etiqueta:"Lista de Cursos"},
                          {logo:"url",router:"inicio_pagos",etiqueta:"Tabla de Pagos"}];
    
  constructor() { }

  ngOnInit() {
  }

}
