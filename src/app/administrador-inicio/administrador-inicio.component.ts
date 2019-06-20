import { Component, OnInit } from '@angular/core';
import {Administrador} from '../Interfaces_2/administrador'
import { AdministradoresService } from '../servicios/administradores.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-administrador-inicio',
  templateUrl: './administrador-inicio.component.html',
  styleUrls: ['./administrador-inicio.component.css']
})
export class AdministradorInicioComponent implements OnInit {
  private administradores:Administrador[];
  private admin:Administrador={
    id:'',
    apellido:'',
    carnet:'',
    fotografia:'',
    nombre:'',
    permiso:'',
    telefono:''
  }
  
  componentes:Array<any>=[{url:"#",nombre:"nombre user 1",ver:"Ver"},{url:"url",nombre:"nombre user",ver:"Ver"}];
  constructor(private conexion:AdministradoresService) {
    console.log(this.conexion.getAdministradores());
    this.conexion.getAdministradores().subscribe(administrador=>{
      this.administradores=administrador;
      console.log(this.administradores);
    });
    
   }
   ver(admin:Administrador){
    this.admin=admin;
   }  
  ngOnInit() {
  }

}
