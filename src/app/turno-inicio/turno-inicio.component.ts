import { Component, OnInit } from '@angular/core';
import { TurnosService } from '../servicios/turnos.service';
import { LoginService } from '../servicios/login.service';
import { PersonalService } from '../servicios/personal.service';
import { Sucursal } from '../Interfaces/sucursal';
import { Turno } from '../Interfaces/turno';

@Component({
  selector: 'app-turno-inicio',
  templateUrl: './turno-inicio.component.html',
  styleUrls: ['./turno-inicio.component.css']
})
export class TurnoInicioComponent implements OnInit {
  titulos:String[]=['#','Nombre','Monto','Hora de Inicio','Hora de Finalizacion'];
  turnos:Turno[];
  turno:Turno;
  constructor(
    private conPersonal:PersonalService,
    private conTurno:TurnosService,
    private conexion:LoginService) {
    this.llenarDatos();
  }
  llenarDatos(){
    console.log("deberia")
    this.conexion.getExiste().then(user=>{
      console.log("user: "+user);
      if(user){
        this.conPersonal.getLugarPersonal(user+"").then(suc=>{
          console.log(suc)
          this.conTurno.getTurnos(suc).subscribe(res=>{
            this.turnos=res;
            console.log(this.turnos)
          })
        })
      }else{
        console.log("no existe");
      }
    })
  }
  ver(ev){
    this.turno=ev
  }
  ngOnInit() {
  }

}
