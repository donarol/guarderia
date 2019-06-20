import { Component, OnInit } from '@angular/core';
import { AdministradoresService } from '../servicios/administradores.service';
import { LoginService } from '../servicios/login.service';
import { Administrador } from '../Interfaces/administrador';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {
  componentes:string[]=['Datos Personales','Historial'];
  
  areas:Array<any>=[{etiqueta:'todos',valor:'Todos'},
                   {etiqueta:'sucursal',valor:'Sucursal'},
                   {etiqueta:'turno',valor:'Turno'},
                   {etiqueta:'curso',valor:'Curso'}];
  datos:Array<any>=[{etiqueta:'nombre:',user:'',nuevo:'Cambiar'},
                    {etiqueta:'Apellido:',user:'',nuevo:'Cambiar'},
                    {etiqueta:'Carnet:',user:'',nuevo:'Cambiar'},
                    {etiqueta:'Telefono:',user:'',nuevo:'Cambiar'},
                    {etiqueta:'Permiso:',user:'',nuevo:'Cambiar'},
                    {etiqueta:'Sucursal',user:'',nuevo:'Cambiar'}];
                    
  private show:number;
  private administrador:Administrador;
  constructor(private admin:AdministradoresService,private conexion:LoginService) {
    this.show = 0;
  }
  ngOnInit() {
    console.log("se cambio");
    this.getDatos();
  }
  getDatos(){
    /* this.datos.forEach(function(iten){
       iten.user="campo";
     })*/
     console.log("mi cuenta");
    this.conexion.getExiste()
    .then(creo=>{
      var uid=creo;
      if(uid!==false){
        this.admin.getAdministrador(uid).subscribe(administrador=>{
          console.log("mi cnuenta nuevo")
          this.datos[0].user=administrador.nombre;
          this.datos[1].user=administrador.apellido;
          this.datos[2].user=administrador.carnet;
          this.datos[3].user=administrador.telefono;
          this.datos[4].user=administrador.permiso;
          //this.datos[5].user=administrador.sucursal;
        })
      }
    })
  }
  public setShow(show:number){
    this.show=show;
    if(this.show==0) console.log("es 0")
    else console.log("es 1")
  }

}
