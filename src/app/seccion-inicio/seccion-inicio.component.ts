import { Component, OnInit } from '@angular/core';
import { SeccionesService } from '../servicios/secciones.service';

@Component({
  selector: 'app-seccion-inicio',
  templateUrl: './seccion-inicio.component.html',
  styleUrls: ['./seccion-inicio.component.css']
})
export class SeccionInicioComponent implements OnInit {

  constructor(
    private conSeccion:SeccionesService
  ) { 

  }
  
  ngOnInit() {
  }

}
