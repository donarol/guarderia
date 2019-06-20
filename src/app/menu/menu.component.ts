import { Component, OnInit } from '@angular/core';
import {LoginService} from '../servicios/login.service';
import { AdministradoresService } from '../servicios/administradores.service';
import { Administrador } from '../Interfaces/administrador';
import { SucursalesService } from '../servicios/sucursales.service';
import { PersonalService } from '../servicios/personal.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  componentes:Array<any>=[];
 // muesta:Administrador;
  componentes_0:Array<any>=[{logo:"url",etiqueta:"Cerrar Sesion",id:'pp'}];
    existe:any;
    constructor(private conexion:LoginService,private personal:PersonalService/*private conexion2:AdministradoresService*/){
  
    }
  ngOnInit() {
    this.verUser();
  }
  /*verC(ad:Administrador){
    console.log("se ve cuenta");
    this.conexion2.crearCuenta("estaesuid",ad);
  }*/
   verUser(){
    this.conexion.getExiste().then(item=>{
      console.log(item);
      if(item){
       /* this.personal.getLugarPersonal(item+"").then(vs=>{
          console.log(vs)
        })*/
        this.componentes=(this.setComponentes());

       /* this.conexion2.getAdministrador(this.existe).subscribe(resultado=>{
          this.muesta=resultado;
          
        console.log(this.muesta);
        this.verC(this.muesta);
        })*/
      }else{
        
        console.log("no existe");
        this.componentes_0=(this.setComponentes_0());
      }
    })
  }
  cerrar(){
    console.log("fas");
    var boton=document.getElementById("pp");
    console.log(boton);
    if(boton){
      console.log("true")
      this.conexion.logout();
    }else{
      console.log("flase")
    }
    /*
    var bttnclick =document.getElementById("pp"); 
    bttnclick.addEventListener("click",modifyText,false);*/
   
  }
  setComponentes(){
    var c:Array<any>=[    
      {logo:"url",router:"",etiqueta:"Inicio"},
      {logo:"url",router:"mi_cuenta",etiqueta:"Mi Cuenta"},
      {logo:"url",router:"cursos_inicio",etiqueta:"Configuraciones"},
      {logo:"url",router:"inscribir_alumno",etiqueta:"Inscribir Alumno"}];
    return c;  
  }
  setComponentes_0(){
    var c:Array<any>=[
      {logo:"url",etiqueta:"Entrar",tar:'modal-entrar'},
      {logo:"url",etiqueta:"Crear Cuenta",tar:'modal-crear'}];
      return c;
  }

}
/*
        if(this.admin!==false){
          console.log("existe");
          administrador.getAdministrador(this.admin).subscribe(admins=>{
            this.administradores=admins;
            console.log(this.administradores);
          });
        }else{
          console.log("No existe");
        }
*/