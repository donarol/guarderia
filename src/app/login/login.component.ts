import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email:string;
  private password:string;
  constructor(private conexion:LoginService) { 
    console.log("hola login");
  }
  login(){
    console.log(this.email)
    console.log(this.password)
    this.conexion.login(this.email,this.password);
  }
 

  ngOnInit() {
  }

}
