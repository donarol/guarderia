import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-inicio',
  templateUrl: './cursos-inicio.component.html',
  styleUrls: ['./cursos-inicio.component.css']
})
export class CursosInicioComponent implements OnInit {
  componentes:Array<any>=[{logo:"url",router:"cursos_nuevo",etiqueta:"Nuevo Curso"},
                          {logo:"url",router:"cursos_pasar",etiqueta:"Pasar Curso a Nivel Superior"},
                          {logo:"url",router:"cursos_configurar",etiqueta:"Configurar Curso"},
                          {logo:"url",router:"",etiqueta:"Borrar Curso"}];
  constructor() { }

  ngOnInit() {
  }

}
