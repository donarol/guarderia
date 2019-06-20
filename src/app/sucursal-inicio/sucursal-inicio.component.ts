import { Component, OnInit } from '@angular/core';
import { SucursalesService } from '../servicios/sucursales.service';
import { Sucursal } from '../Interfaces_2/sucursal';
import { SeccionesService } from '../servicios/secciones.service';
import { Seccion } from '../Interfaces_2/seccion';

@Component({
  selector: 'app-sucursal-inicio',
  templateUrl: './sucursal-inicio.component.html',
  styleUrls: ['./sucursal-inicio.component.css']
})
export class SucursalInicioComponent implements OnInit {
  private sucursales:Sucursal[];
  private secciones:Seccion[][]=[];
  
  private enviarSucursal:Sucursal={
    id:'',
    nombre:'',
    direccion:''
  };
  
  constructor(
    private conSucursal:SucursalesService,
    private conSeccion:SeccionesService
  ) {
    console.log("entro sucursal");
    this.cargaSucursal()
  }
  cargaSucursal(){
    console.log("deberia");
    this.conSucursal.getSucursales().subscribe(sucursales=>{
      console.log("entro datos")
      this.sucursales=sucursales;
      this.cargaSecciones()
    })
  }
  cargaSecciones(){
    var con=0;
    this.sucursales.forEach(iter=>{
      this.conSeccion.getSecciones(iter).subscribe(res=>{
        console.log(res)
        this.secciones[con]=res;
        con++;
        
      })
    })
  }
  guardar(){
    console.log("")
  }

  ngOnInit() {}
  
  cambiar(sucursal:Sucursal){
    console.log("cambiar")
    console.log(sucursal)
    this.enviarSucursal=sucursal;
  }
  uno(index){
      document.getElementById(`button_${index}`).setAttribute("data-target",`#collapse_${index}`)
      console.log(document.getElementById(`collapse_${index}`).classList.length)
      console.log(document.getElementById(`collapse_${index}`).classList)
  }

}
