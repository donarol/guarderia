import { Component, OnInit } from '@angular/core';
import { Alumno } from '../Interfaces_2/alumno';
import { Alergia } from '../Interfaces_2/alergia';
import { Sucursal } from '../Interfaces_2/sucursal';

@Component({
  selector: 'app-inscripcion-alumno',
  templateUrl: './inscripcion-alumno.component.html',
  styleUrls: ['./inscripcion-alumno.component.css']
})
export class InscripcionAlumnoComponent implements OnInit {
  alumno:Alumno={
    nombre:'',
    apellido:'',
    fechaNacimiento:'',
    lugarNacimiento:'',
    tipoSanguineo:'',
    telefono:'',
    celular:'',
    domicilio:'',
    certificadoVacuna:false,
    rude:false,
    certificadoNacimiento:false
  }

  alergias:Alergia[]=[];
  datos:Array<any>=[
    {etiqueta:"Nombre:",tipo:"text",clase:"largo",modelo:''},
    {etiqueta:"Apellido:",tipo:"text",clase:"largo",modelo:''},
    {etiqueta:"fecha de Nacimiento:",tipo:"date",clase:"corto",modelo:''},
    {etiqueta:"Lugar de Nacimiento:",tipo:"text",clase:"corto",modelo:''},
    {etiqueta:"Tipo Sanguineo:",tipo:"text",clase:"corto",modelo:''},
    {etiqueta:"Telefono:",tipo:"text",clase:"corto",modelo:''},
    {etiqueta:"Celular:",tipo:"text",clase:"corto",modelo:''}];
 /* alergias:Array<any>=[{nombre:'alergia 1',descripcion:'Descripcion 1'},
    {nombre:'alergia 2',descripcion:'Descripcion 2'}];*/
  datos_2:Array<any>=[
    {etiqueta:'Nombre de la Madre:',clase:'largo'},
    {etiqueta:'Apellido de la Madre:',clase:'largo'},
    {etiqueta:'Ocupacion:',clase:'corto'},
    {etiqueta:'Telefono:',clase:'corto'},
    {etiqueta:'Nombre del Padre:',clase:'largo'},
    {etiqueta:'Apellido del Padre:',clase:'largo'},
    {etiqueta:'Ocupacion:',clase:'corto'},
    {etiqueta:'Telefono:',clase:'corto'},
    {etiqueta:'Telefono de Emergencia:',clase:'corto'}];
  certificados:Array<any>=[
    {etiqueta:'Certificado de Vacunas:',estado:'true',id:'cer_vacunas',modelo:false},
    {etiqueta:'R U D E:',estado:'false',id:'cer_rude',modelo:false},
    {etiqueta:'Certificado de Nacimiento:',estado:'true',id:'cer_nacimiento',modelo:false}];

    constructor() { }

  ngOnInit() {  
  }
  inscribir(){
    this.alumno.nombre=this.datos[0].modelo;
    this.alumno.apellido=this.datos[1].modelo;
    this.alumno.fechaNacimiento=this.datos[2].modelo;
    this.alumno.lugarNacimiento=this.datos[3].modelo;
    this.alumno.tipoSanguineo=this.datos[4].modelo;
    this.alumno.telefono=this.datos[5].modelo;
    this.alumno.celular=this.datos[6].modelo;
    this.alumno.certificadoVacuna=this.certificados[0].modelo;
    this.alumno.rude=this.certificados[1].modelo;
    this.alumno.certificadoNacimiento=this.certificados[2].modelo;
    console.log("el nuevo alumno")
    console.log(this.alumno)
  }




}
