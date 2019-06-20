import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-pasar',
  templateUrl: './cursos-pasar.component.html',
  styleUrls: ['./cursos-pasar.component.css']
})
export class CursosPasarComponent implements OnInit {
  secciones:String[]=['Parbulario','Pre-Kinder','Kinder'];
  cursos:String[]=['Curso 1','Curso 2'];
  turnos:String[]=['Turno 1','Turno 2'];
  componentes:Array<any>=[
    {etiqueta:'Seccion:',dato:'El Nuevo'},
    {etiqueta:'Año a Cursar:',dato:'2020'}];
  constructor() { }

  ngOnInit() {
  }

}
