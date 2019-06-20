import { Component, OnInit } from '@angular/core';
import { SeccionesService } from '../servicios/secciones.service';
import { TurnosService } from '../servicios/turnos.service';
import { SucursalesService } from '../servicios/sucursales.service';
import { LoginService } from '../servicios/login.service';
import { PersonalService } from '../servicios/personal.service';
import { Seccion } from '../Interfaces/seccion';
import { Sucursal } from '../Interfaces/sucursal';
import { Turno } from '../Interfaces/turno';
import { Curso } from '../Interfaces_2/curso';
import { Datos } from '../Interfaces/datos';
import { CursosService } from '../servicios/cursos.service';

@Component({
  selector: 'app-cursos-configurar',
  templateUrl: './cursos-configurar.component.html',
  styleUrls: ['./cursos-configurar.component.css']
})
export class CursosConfigurarComponent implements OnInit {
/*  componentes:Array<any>=[
    {etiqueta:'Seccion:',datos:['Parbulario','Pre-kinder','Kinder']},
    {etiqueta:'Turno:',datos:["Un Turno","Doble Turno"]},
    {etiqueta:'Sucursal:',datos:['Sucursal 1','Sucursal 2']},
    {etiqueta:'Gestion',datos:['2018','2019','2020','2021']}];
*/

    private cursos:Curso[];
    private muestraCursos:Array<Curso>;
    private secciones:Seccion[];
    private turnos:Turno[];
    private gestiones:string[]=['2019','2020','2021'];
    private gestion:string;
    private curso:any={
      nombre:'',
      gestion:'',
      seccion:'',
      turno:''
    };
    private sucursal:any;
    private enviaCurso:Curso;
  constructor(
    private conSeccion:SeccionesService,
    private conTurno:TurnosService,
    private conSucursal:SucursalesService,
    private conexion:LoginService,
    private conPersona:PersonalService,
    private conCurso:CursosService
    ){     
      this.gestion=this.gestiones[0];
      this.sucursal=new Sucursal()
      this.muestraCursos=new Array<Curso>();
      this.cargaSucursalActual().then(res=>{
      this.sucursal=res;
      this.cargaSecciones(res)
      this.cargaTurno(res)
      this.cargarCurso(res)
    })
  }
  cargaSucursalActual(){
    var promise=new Promise((resolve,reject)=>{
      this.conexion.getExiste().then(user=>{
        console.log("user: "+user);
        if(user){
          this.conPersona.getLugarPersonal(user+"").then(suc=>{
            resolve(suc);
          })
        }else{
          console.log("no existe user")
        }
      })
    })
    return promise
  }
  cargaSecciones(sucursal){
    this.conSeccion.getSecciones(sucursal).subscribe(res=>{
      this.secciones=res
    })
  }
  cargaTurno(sucursal){
    this.conTurno.getTurnos(sucursal).subscribe(res=>{
      this.turnos=res
    })
  }
  cargarCurso(sucursal){
    this.conCurso.getCursos(sucursal).subscribe(res=>{
      this.cursos=res;
      this.muestraCursos=this.muestraCurso()
    })
  }  
  onChangeGestion(deviceValue){
    console.log("entro gestion: "+deviceValue.target.value)
    this.gestion=deviceValue.target.value
    this.muestraCursos=this.muestraCurso()
    
  }
  muestraCurso(){
    var aux:Array<Curso>=new Array<Curso>();
    this.cursos.forEach(iter=>{
     if(iter.gestion===this.gestion){
          console.log("se agrega ")
          console.log(iter)
          aux.push(iter)
        }
   })
   return aux;
  }
  muestra(curso:Curso){
    console.log("el curso es")
    console.log(curso)
    this.curso=curso
  }

  ngOnInit() {
  }

}
