import { Component, OnInit,Input } from '@angular/core';
import { Turno } from '../Interfaces/turno';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-turno-cambiar',
  templateUrl: './turno-cambiar.component.html',
  styleUrls: ['./turno-cambiar.component.css']
})
export class TurnoCambiarComponent implements OnInit {
  private id:string;
  titulos:string[]=['#','Administrador','Actividad','Fecha'];
  constructor(
    private rutaActiva: ActivatedRoute
  ){
   }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    console.log("el turno es "+this.id);
  }

}
