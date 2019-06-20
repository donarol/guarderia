import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {
  componentes:any[]=[{logo:"url",router:"cursos_inicio",etiqueta:"Curso"},
                          {logo:"url",router:"sucursal_inicio",etiqueta:"Sucursal"},
                          {logo:"url",router:"seccion_inicio",etiqueta:'Seccion'},
                          {logo:"url",router:"turno_inicio",etiqueta:"Turno"},
                          {logo:"url",router:"servicio_inicio",etiqueta:"Servicio"},
                          {logo:"url",router:"administrador_inicio",etiqueta:"Administrador"}];                    
  constructor() { }

  ngOnInit() {
  }

}
