import { Component, OnInit,Input } from '@angular/core';
import { Sucursal } from '../Interfaces_2/sucursal';
import { SucursalesService } from '../servicios/sucursales.service';

@Component({
  selector: 'app-sucursal-cambiar',
  templateUrl: './sucursal-cambiar.component.html',
  styleUrls: ['./sucursal-cambiar.component.css']
})
export class SucursalCambiarComponent implements OnInit {
componentes:Array<any>=[
  {etiqueta:'Nombre:'},
  {etiqueta:'Direccion:'}
];
nuevo:Sucursal={
  id:'',
  nombre:'',
  direccion:''
}
@Input() sucursal:Sucursal;
  constructor(
    private conSucursal:SucursalesService
  ) { }

  ngOnInit() {
  }
  cambiar(){
    console.log("se cambia")
    console.log(this.sucursal)
    this.nuevo.id=this.sucursal.id
    console.log("por")
    console.log(this.nuevo)
    this.conSucursal.update(this.nuevo)
  }

}
