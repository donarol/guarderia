import { Component, OnInit,Input } from '@angular/core';
import { Turno } from '../Interfaces/turno';
import { ActivatedRoute } from '@angular/router';
import { TurnosService } from '../servicios/turnos.service';
import { PersonalService } from '../servicios/personal.service';
import { LoginService } from '../servicios/login.service';
@Component({
  selector: 'app-turno-cambiar',
  templateUrl: './turno-cambiar.component.html',
  styleUrls: ['./turno-cambiar.component.css']
})
export class TurnoCambiarComponent implements OnInit {
  private id:string;
  private turno:Turno=new Turno();
  titulos:string[]=['#','Administrador','Actividad','Fecha'];
  constructor(
    private rutaActiva: ActivatedRoute,
    private conTurno: TurnosService,
    private conPersonal: PersonalService,
    private conexion:LoginService
  ){
   }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    console.log("el turno es "+this.id);
    this.cargaTurno();
  }
  cargaTurno(){
    this.conexion.getExiste().then(user=>{
      console.log("user: "+user);
      if(user){
        this.conPersonal.getLugarPersonal(user+"").then(suc=>{
          console.log(suc)
          this.conTurno.getTurno(this.id,suc).subscribe(res=>{
            this.turno=res;
          })
        })
      }else{
        console.log("no existe");
      }
    });
  }

}
