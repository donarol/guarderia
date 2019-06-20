import { Component, OnInit,Input} from '@angular/core';
import { Alergia } from '../Interfaces_2/alergia';

@Component({
  selector: 'app-alergias-nuevo',
  templateUrl: './alergias-nuevo.component.html',
  styleUrls: ['./alergias-nuevo.component.css']
})
export class AlergiasNuevoComponent implements OnInit {
  private  componentes:String[]=['Agregar Alergia','Modificar Alergia','Borrar Alergia']

n_alergia:Alergia={
  nombre:'',
  descripcion:''
}
@Input() alergias:Alergia[];/*
alergias:Array<any>=[
  {nombre:'nombre 1',descripccion:'descripccion 1'},
  {nombre:'nombre 1',descripccion:'descripccion 1'},
  {nombre:'nombre 1',descripccion:'descripccion 1'},
  {nombre:'nombre 1',descripccion:'descripccion 1'},
  {nombre:'nombre 1',descripccion:'descripccion 1'},
  {nombre:'nombre 1',descripccion:'descripccion 1'},
  {nombre:'nombre 1',descripccion:'descripccion 1'},
  {nombre:'nombre 1',descripccion:'descripccion 1'},
  {nombre:'nombre 1',descripccion:'descripccion 1'},
  {nombre:'nombre 1',descripccion:'descripccion 1'}
];*/
  constructor() { }

  ngOnInit() {
  }
  botones(entra){
    switch (entra) {
      case 'Agregar Alergia':
        this.agrega()
        break;
      case 'Modificar Alergia':
        this.modificar()
        break;
      case 'Borrar Alergia':
        this.borrar()
        break;
    }
  }

  agrega(){
    this.alergias.push(this.nuevo(this.n_alergia))
    this.reinicio()
  }
  modificar(){
   // this.alergias.splice(1,1)
    console.log("se modificar ")
    console.log(this.sel)
    console.log("por")
    console.log(this.n_alergia)
    for (let index = 0; index < this.alergias.length; index++) {
      if(this.sel===this.alergias[index]){
        this.alergias[index]=this.nuevo(this.n_alergia)
      } 
    }
    this.reinicio()
    //ERRORES 
    // - NO SE ENCONTRO
    
  }
  borrar(){
    console.log("se borra")
    console.log(this.sel)
    for (let index = 0; index < this.alergias.length; index++) {
      if(this.sel===this.alergias[index]){
        console.log("se encontro pos "+index)
        this.alergias.splice(index,1)
      }      
    }
    this.reinicio()
  }
  ver(alergia){
    this.sel=alergia;
    this.n_alergia=this.nuevo(alergia)
  }

  nuevo(alergia:Alergia){
    var n:Alergia={
      nombre:alergia.nombre,
      descripcion:alergia.descripcion
    }
    return n;
  }
  reinicio(){
    this.n_alergia.nombre=''
    this.n_alergia.descripcion=''
    this.sel=null;
  }
  sel:Alergia;
}
