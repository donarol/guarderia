import { Component, OnInit,Input} from '@angular/core';
import { Curso } from '../Interfaces_2/curso';
@Component({
  selector: 'app-cursos-datos',
  templateUrl: './cursos-datos.component.html',
  styleUrls: ['./cursos-datos.component.css']
})
export class CursosDatosComponent implements OnInit {
componentes:Array<any>=[
  {etiqueta:'Nombre del Curso:',dato:'aqui el nombre'},
  {etiqueta:'Seccion:',dato:'aqui la seccion'},
  {etiqueta:'Turno:',dato:'aqui el turno'},
  {etiqueta:'Sucursal:',dato:'aqui la sucursal'},
  {etiqueta:'Gestion:',dato:'aqui la gestion'}
];
  @Input() curso:Curso;
  
  constructor(
  ) { }

  ngOnInit() {
  }

}
