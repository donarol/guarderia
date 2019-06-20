import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pariente-datos',
  templateUrl: './pariente-datos.component.html',
  styleUrls: ['./pariente-datos.component.css']
})
export class ParienteDatosComponent implements OnInit {
  private componentes:String[]=['Agregar Pariente','Modificar Pariente','Borrar Pariente'];
  constructor() { }

  ngOnInit() {
  }
  botones(componente){
    console.log(componente);
  }

}
