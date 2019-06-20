import { Component, OnInit,Input } from '@angular/core';
import { Curso } from '../Interfaces_2/curso';
import { CursosService } from '../servicios/cursos.service';
import { Sucursal } from '../Interfaces_2/sucursal';
import { TurnosService } from '../servicios/turnos.service';
import { SeccionesService } from '../servicios/secciones.service';
import { PersonalService } from '../servicios/personal.service';
import { LoginService } from '../servicios/login.service';
import { Seccion } from '../Interfaces_2/seccion';
import { Turno } from '../Interfaces_2/turno';
import { Datos } from '../Interfaces/datos';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {
  private cursos:Curso[];
  private secciones:Seccion[];
  private turnos:Turno[];
  private gestiones:string[]=['2019','2020','2021'];
  private datos:Datos;
  private sucursal:any={
    nombre:''
  };
private muestraCursos:Array<Curso>;
private auxCurso:Curso;
private envioCurso:Curso;
  constructor(
    private conCurso:CursosService,
    private conTurno:TurnosService,
    private conSeccion:SeccionesService,
    private conexion:LoginService,
    private conPersona:PersonalService,
  ) {
    this.datos=new Datos()
    this.cargaSucursalActual().then(res=>{
      this.sucursal=res
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

  ngOnInit() {
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
  seleccionCurso(curso){
    this.auxCurso=curso;
    console.log(this.auxCurso)
  }
  enviarCurso(){
    this.envioCurso=this.auxCurso;
    console.log("se envia")
    console.log(this.enviarCurso)
  }
  
}
