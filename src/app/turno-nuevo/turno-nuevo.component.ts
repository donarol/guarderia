import { Component, OnInit } from '@angular/core';
import { TurnosService } from '../servicios/turnos.service';
import { LoginService } from '../servicios/login.service';
import { PersonalService } from '../servicios/personal.service';
import { Turno } from '../Interfaces/turno';
import { Sucursal } from '../Interfaces/sucursal';

@Component({
  selector: 'app-turno-nuevo',
  templateUrl: './turno-nuevo.component.html',
  styleUrls: ['./turno-nuevo.component.css']
})
export class TurnoNuevoComponent implements OnInit {
  componentes_0:Array<any>=[{etiqueta:"Nombre:",place:"Nombre del Turno"},
    {etiqueta:"Monto:",place:"Monto del Turno"}];
    /*
  componentes:Array<any>=[
    {etiqueta:'Sucursal:',datos:['Sucursal 1','Sucursal 2']},
    {etiqueta:'Gestion',datos:['2018','2019','2020','2021']}];*/ 
  gestion:string[]=['2019','2020','2021'];
  private turnos:Turno[];
  private turno:Turno;
  private sucursal:any;
  constructor(
    private conPersona:PersonalService,
    private conTurno:TurnosService,
    private conUser:LoginService) {
   // this.listaTurno()
   this.sucursal=""
    this.cargaSucursal().then(suc=>{
      this.sucursal=suc
      this.cargaTurnos(suc)
    })
   }
  cargaSucursal(){
    var promise=new Promise((resolve,reject)=>{
      this.conUser.getExiste().then(user=>{
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
  cargaTurno(sucursal,gestion){
    
  }
  cargaTurnos(sucursal){
    this.conTurno.getTurnos(sucursal).subscribe(res=>{
      this.turnos=res;
      console.log(this.turnos);
    })
  }
/*
  listaTurno(){
    this.conUser.getExiste().then(user=>{
      console.log("user: "+user);
      if(user){
        console.log("existe user ")
        this.conPersonal.getLugarPersonal(user+"").then(suc=>{
          console.log(suc)
          this.conTurno.getTurnos(suc).subscribe(res=>{
            this.turnos=res;
            console.log(this.turnos)
          })
        })
      }
    })
  }*/
  ver(turno){
    console.log("se ve:"+turno.nombre);
    this.turno=turno;
  }
  onChangeGestion(deviceValue){
    console.log(deviceValue.target.value)
  }
  ngOnInit() {
  }

}
