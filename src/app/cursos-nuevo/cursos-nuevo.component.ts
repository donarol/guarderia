import { Component, OnInit } from '@angular/core';
import { SeccionesService } from '../servicios/secciones.service';
import { TurnosService } from '../servicios/turnos.service';
import { SucursalesService } from '../servicios/sucursales.service';
import { LoginService } from '../servicios/login.service';
import { PersonalService } from '../servicios/personal.service';
import { Seccion } from '../Interfaces/seccion';
import { Sucursal } from '../Interfaces_2/sucursal';
import { Turno } from '../Interfaces/turno';
import { CursosService } from '../servicios/cursos.service';
import { Datos } from '../Interfaces/datos';
import { Curso } from '../Interfaces_2/curso';

@Component({
  selector: 'app-cursos-nuevo',
  templateUrl: './cursos-nuevo.component.html',
  styleUrls: ['./cursos-nuevo.component.css']

})  

export class CursosNuevoComponent implements OnInit{
 /* componentes:Array<any>=[
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
  private datos:Datos;
  private sucursal:any={
    id:'',
    nombre:'',
    direccion:''
  };

  private enviaCurso:any={
    nombre:'',
    gestion:'',
    seccion:'',
    turno:''
  };
  private nombreCurso:string;

  constructor(
    private conSeccion:SeccionesService,
    private conTurno:TurnosService,
    private conexion:LoginService,
    private conPersona:PersonalService,
    private conCurso:CursosService
  ){      
    this.datos=new Datos()
    this.cargaSucursalActual().then(res=>{
      this.sucursal=res;
      this.cargaSecciones(res)
      this.cargaTurno(res)
      this.cargaCursos(res)
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
  cargaCursos(sucursal){
    this.conCurso.getCursos(sucursal).subscribe(res=>{
      this.cursos=res;      
      this.muestraCursos=this.muestraCurso()
    })
  }
  verCurso(curso){
    console.log("se el curso ")
    console.log(curso)
    this.enviaCurso.nombre=curso.nombre;
    this.enviaCurso.gestion=curso.gestion;
    this.conTurno.getTurno(curso.turno,this.sucursal).subscribe(turno=>{
      console.log("se carga el turno:")
      console.log(turno)
      this.enviaCurso.turno=turno.nombre;
      this.conSeccion.getSeccion(curso.seccion,this.sucursal).subscribe(seccion=>{
        console.log("se carga la seccion:")
        console.log(seccion)
        this.enviaCurso.seccion=seccion.nombre;
        console.log("actual")
        console.log(curso)
        console.log("nuevo")
        console.log(this.enviaCurso)
      })
    })
    
   // this.curso=curso
  }
  /* TODOS ENVIA CON NOMBRE EXTRA
  verCurso(curso){
    console.log("se ve el curso: "+curso.turno)
    this.curso=curso
    this.conTurno.getTurno(curso.turno,this.sucursal.id).subscribe(res=>{
      this.curso.nomTurno=res.nombre;
      console.log(this.curso)
    })
    this.conSeccion.getSeccion(curso.seccion,this.sucursal.id).subscribe(res=>{
      this.curso.nomSeccion=res.nombre;
    })
  }*/
 /* onChange(deviceValue) {
    console.log(deviceValue.target.value);
    console.log(this.secciones[deviceValue.target.value])
  }*/
  onChangeSeccion(deviceValue){
    console.log("entro secciones: "+deviceValue.target.value)
    this.datos.seccion=deviceValue.target.value
    this.muestraCursos=this.muestraCurso()
  }
  onChangeTurno(deviceValue){
    console.log("entro turno: "+deviceValue.target.value)
    this.datos.turno=deviceValue.target.value
    this.muestraCursos=this.muestraCurso()
  }
  onChangeGestion(deviceValue){
    console.log("entro gestion: "+deviceValue.target.value)
    this.datos.gestion=deviceValue.target.value
    this.muestraCursos=this.muestraCurso()
  }
  muestraCurso(){
    var aux:Array<Curso>=new Array<Curso>();
    this.cursos.forEach(iter=>{
     if(iter.seccion===this.secciones[this.datos.seccion].id && 
        iter.turno===this.turnos[this.datos.turno].id &&
        iter.gestion===this.gestiones[this.datos.gestion]){
          console.log("se agrega ")
          console.log(iter)
          aux.push(iter)
        }
   })
   return aux;
  }
  ff(){
 /*   var nuevo=Array();
    console.log("se agrega nuevo curso: "+this.nombreCurso)
    nuevo.push({nombre:this.nombreCurso});
    nuevo.push({seccion:this.secciones[this.datos.seccion].id})
    nuevo.push({turno:this.turnos[this.datos.turno].id})
    //this.nuevo.push({sucursal:this.sucursal.id})
    nuevo.push({gestion:this.gestiones[this.datos.gestion]});
    console.log(nuevo);
*/
    this.nuevo.nombre=this.nombreCurso;
    this.nuevo.gestion=this.gestiones[this.datos.gestion];
    this.nuevo.seccion=this.secciones[this.datos.seccion].id;
    this.nuevo.turno=this.turnos[this.datos.turno].id;
    console.log("este es el nuevo")
    console.log(this.nuevo)
    this.conCurso.addCurso(this.sucursal.id,this.nuevo)
  }
  ngOnInit() {
  }
  nuevo:any={
    nombre:'',
    gestion:'',
    seccion:'',
    turno:''
  };
}
