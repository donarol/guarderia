import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio-nuevo',
  templateUrl: './servicio-nuevo.component.html',
  styleUrls: ['./servicio-nuevo.component.css']
})
export class ServicioNuevoComponent implements OnInit {
componentes_0:String[]=['Nombre del Servicio:','Monto del Servicio:'];
componentes:Array<any>=[
  {etiqueta:'Plan:',datos:['Anual','Mensual']},
  {etiqueta:'Aplica a:',datos:['Sucursal','Curso']},
  {etiqueta:'Cursos o Sucursal:',datos:['curso 1','curso 2','curso 3']}];
    
constructor() { }

  ngOnInit() {
  }

}
