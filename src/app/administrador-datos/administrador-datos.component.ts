import { Component, OnInit,Input } from '@angular/core';
import { Administrador } from '../Interfaces_2/administrador';

import { ActivatedRoute } from '@angular/router';
import { AdministradoresService } from '../servicios/administradores.service';
import { PersonalService } from '../servicios/personal.service';
import { LoginService } from '../servicios/login.service';
@Component({
  selector: 'app-administrador-datos',
  templateUrl: './administrador-datos.component.html',
  styleUrls: ['./administrador-datos.component.css']
})
export class AdministradorDatosComponent implements OnInit {
  componentes:string[]=['Datos Personales','Historial'];
  private administrador=new Administrador();

 /* datos:Array<any>=[{etiqueta:'nombre:',user:this.administrador.nombre},
                    {etiqueta:'Apellido:',user:this.administrador.apellido},
                    {etiqueta:'Carnet:',user:this.administrador.carnet},
                    {etiqueta:'Telefono:',user:this.administrador.telefono},
                    {etiqueta:'Permiso:',user:this.administrador.permiso},
                    {etiqueta:'Sucursal',user:'aqui la sucursal'}]; */             
  private show:boolean;
  private id:string;
  constructor(
    private rutaActiva: ActivatedRoute,
    private conAdmin:AdministradoresService,
    private conPersonal: PersonalService,
    private conexion:LoginService
  ) {
    this.show=true;
  }
  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id;
    console.log("id "+this.id);
    this.cargaTurno();
  }
  cambio(estado){
    this.show=estado;
  }

  cargaTurno(){
    this.conexion.getExiste().then(user=>{
      console.log("user: "+user);
      if(user){
        this.conPersonal.getLugarPersonal(user+"").then(suc=>{
          console.log(suc)
          this.conAdmin.getAdministrador(this.id).subscribe(res=>{
            console.log(res);
            this.administrador=res;
          });
        })
      }else{
        console.log("no existe");
      }
    });
  }

}
