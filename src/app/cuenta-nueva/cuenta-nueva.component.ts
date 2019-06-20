import { Component, OnInit } from '@angular/core';
import { AdministradoresService } from '../servicios/administradores.service';
import { Administrador } from '../Interfaces/administrador';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-cuenta-nueva',
  templateUrl: './cuenta-nueva.component.html',
  styleUrls: ['./cuenta-nueva.component.css']
})
export class CuentaNuevaComponent implements OnInit {
  
  componentes:Array<any>=[
    {etiqueta:'nombre',clase:'corto',tipo:'text'},
    {etiqueta:'apellido',clase:'corto',tipo:'text'},
    {etiqueta:'carnet',clase:'corto',tipo:'text'},
    {etiqueta:'telefono',clase:'corto',tipo:'text'},
    {etiqueta:'email',clase:'largo',tipo:'email'},
    {etiqueta:'contraseña',clase:'corto',tipo:'password'},
    {etiqueta:'repita la contraseña',clase:'corto',tipo:'password'}
  ];
  etiqueta:string[]=[];  
  admin:any;
  constructor(
    private conAdmin:AdministradoresService,
    private conexion:LoginService
    ){
   }

  ngOnInit(){}
  crearCuenta(){
    this.admin=Array(); 
    this.admin.push({nombre:this.etiqueta[0]});
    this.admin.push({apellido:this.etiqueta[1]});
    this.admin.push({carnet:this.etiqueta[2]});
    this.admin.push({telefono:this.etiqueta[3]});
    this.admin.push({fotografia:'https://firebasestorage.googleapis.com/v0/b/proyecto-1-31e5a.appspot.com/o/prueba%2Fdefecto.png?alt=media&token=429f8dc7-9623-48da-82f8-448ff2888f01'})
    this.admin.push({permiso:'Si'})
    console.log("ve cuenta")
    console.log(this.admin)
    console.log("ver cuentao")
    for (let index = 0; index < this.etiqueta.length; index++) {
      console.log(this.etiqueta[index])
    }
   //  this.conAdmin.guardaCuenta1("esteIdP",this.admins);
   /*this.conAdmin.crearCuenta(this.admin[4],this.admin[5]).then(res=>{
    console.log("se crea una cuenta")
    this.conexion.getExiste().then(user=>{
      console.log("este user "+user)
      this.conAdmin.guardaCuenta1(user,this.admin)
    })
   }).catch(res=>{
     console.log("no se creo nada")
   })*/
  }

}
