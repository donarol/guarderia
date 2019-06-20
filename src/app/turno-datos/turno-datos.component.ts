import { Component, OnInit,Input } from '@angular/core';
import { Turno } from '../Interfaces/turno';

@Component({
 // changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-turno-datos',
  templateUrl: './turno-datos.component.html',
  styleUrls: ['./turno-datos.component.css']
})
export class TurnoDatosComponent implements OnInit {
  
  @Input() turno:Turno;
 // componentes:Array<any>;
  constructor() {
  
  /* DESCARTO LLENAR UN ARRAY
    console.log(this.turno)
    this.componentes=new Array<any>();
    this.componentes.push({etiqueta:'Nombre del Curso:',dato:this.turno.nombre})
    this.componentes.push({etiqueta:'Monto:',dato:this.turno.monto})
    this.componentes.push({etiqueta:'Gestion:',dato:this.turno.gestion})*/
    
   }

  ngOnInit() {
    
    this.turno=new Turno();
    console.log(this.turno)
  }

}
