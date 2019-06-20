import { Component, OnInit } from '@angular/core';
import { Curso } from '../Interfaces_2/curso';
import { CursosService } from '../servicios/cursos.service';
import { SucursalesService } from '../servicios/sucursales.service';
import { LoginService } from '../servicios/login.service';
import { PersonalService } from '../servicios/personal.service';

@Component({
  selector: 'app-inicio-datos',
  templateUrl: './inicio-datos.component.html',
  styleUrls: ['./inicio-datos.component.css']
})
export class InicioDatosComponent implements OnInit {
  cursos:Curso[]
  constructor(
    private conCurso:CursosService,
    private conexion:LoginService,
    private conPersona:PersonalService
    ){
      this.cargaSucursal().then(res=>{
        this.cargaCurso(res);
      })
    }
  cargaSucursal(){
    var promise=new Promise((resolve,reject)=>{
      this.conexion.getExiste().then(user=>{
        console.log("user: "+user);
        if(user){
          this.conPersona.getLugarPersonal(user+"").then(suc=>{
            resolve(suc);
          })
        }else{
          console.log("no existe user")
        }
      })
    })
    return promise
  }
  cargaCurso(sucursal){
    this.conCurso.getCursos(sucursal).subscribe(res=>{
      console.log(res)
      console.log(res.length)
    })
  }

  ngOnInit() {
  }

}
