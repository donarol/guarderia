import { Component, OnInit,Input } from '@angular/core';
import { Administrador } from '../Interfaces_2/administrador';

@Component({
  selector: 'app-administrador-datos',
  templateUrl: './administrador-datos.component.html',
  styleUrls: ['./administrador-datos.component.css']
})
export class AdministradorDatosComponent implements OnInit {
  componentes:string[]=['Datos Personales','Historial'];
  
  areas:Array<any>=[{etiqueta:'todos',valor:'Todos'},
                   {etiqueta:'sucursal',valor:'Sucursal'},
                   {etiqueta:'turno',valor:'Turno'},
                   {etiqueta:'curso',valor:'Curso'}];
  datos:Array<any>=[{etiqueta:'nombre:',user:'aqui el nombre'},
                    {etiqueta:'Apellido:',user:'aqui el apellido'},
                    {etiqueta:'Carnet:',user:'aqui el carnet'},
                    {etiqueta:'Telefono:',user:'aqui el telefono'},
                    {etiqueta:'Permiso:',user:'aqui el permiso'},
                    {etiqueta:'Sucursal',user:'aqui la sucursal'}];
  @Input() admin:Administrador;                  
  private show:number;
  constructor() {
    this.show = 0;
  }
  ngOnInit() {
  }
  public setShow(show:number){
    this.show=show;
    if(this.show==0) console.log("es 0")
    else console.log("es 1")
  }

}
