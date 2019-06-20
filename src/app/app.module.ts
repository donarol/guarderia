import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 

//conexion
import {ConexionService} from './services/conexion.service';
import {LoginService} from './servicios/login.service';
import {AdministradoresService} from './servicios/administradores.service';
import {SucursalesService} from './servicios/sucursales.service';
import {TurnosService} from './servicios/turnos.service';
import {PersonalService} from './servicios/personal.service';
import {CursosService} from './servicios/cursos.service';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { CursosInicioComponent } from './cursos-inicio/cursos-inicio.component';
import { InicioComponent } from './inicio/inicio.component';
import { SucursalInicioComponent } from './sucursal-inicio/sucursal-inicio.component';
import { TurnoInicioComponent } from './turno-inicio/turno-inicio.component';
import { ServicioInicioComponent } from './servicio-inicio/servicio-inicio.component';
import { AdministradorInicioComponent } from './administrador-inicio/administrador-inicio.component';
import { CursosNuevoComponent } from './cursos-nuevo/cursos-nuevo.component';
import { TurnoNuevoComponent } from './turno-nuevo/turno-nuevo.component';
import { InscripcionAlumnoComponent } from './inscripcion-alumno/inscripcion-alumno.component';
import { AlergiasNuevoComponent } from './alergias-nuevo/alergias-nuevo.component';
import { CursosPasarComponent } from './cursos-pasar/cursos-pasar.component';
import { ServicioNuevoComponent } from './servicio-nuevo/servicio-nuevo.component';
import { CursosConfigurarComponent } from './cursos-configurar/cursos-configurar.component';
import { AdministradorDatosComponent } from './administrador-datos/administrador-datos.component';
import { LoginComponent } from './login/login.component';
import { CuentaNuevaComponent } from './cuenta-nueva/cuenta-nueva.component';
import { CursosDatosComponent } from './cursos-datos/cursos-datos.component';
import { SucursalCambiarComponent } from './sucursal-cambiar/sucursal-cambiar.component';
import { TurnoDatosComponent } from './turno-datos/turno-datos.component';
import { InicioDatosComponent } from './inicio-datos/inicio-datos.component';
import { InicioCursosComponent } from './inicio-cursos/inicio-cursos.component';
import { InicioPagosComponent } from './inicio-pagos/inicio-pagos.component';
import { TurnoCambiarComponent } from './turno-cambiar/turno-cambiar.component';
import { SeccionInicioComponent } from './seccion-inicio/seccion-inicio.component';
import { from } from 'rxjs';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { ParienteNuevoComponent } from './pariente-nuevo/pariente-nuevo.component';
import { ParienteDatosComponent } from './pariente-datos/pariente-datos.component';
const routes: Routes = [
  { path: 'mi_cuenta', component: MiCuentaComponent},
  { path: '',component:InicioComponent},
  { path: 'inscribir_alumno',component:InscripcionAlumnoComponent},
  { path: '',component:InicioComponent,children:
    [{path:'inicio_datos',component:InicioDatosComponent},
     {path:'inicio_cursos',component:InicioCursosComponent},
     {path:'inicio_pagos',component:InicioPagosComponent}]},
  { path: '',component:ConfiguracionesComponent,children:
    [{path:'cursos_inicio',component:CursosInicioComponent},
     {path:'cursos_nuevo',component:CursosNuevoComponent},
     {path:'cursos_pasar',component:CursosPasarComponent},
     {path:'cursos_configurar',component:CursosConfigurarComponent},
     {path:'sucursal_inicio',component:SucursalInicioComponent},
     {path:'seccion_inicio',component:SeccionInicioComponent},
     {path:'turno_inicio',component:TurnoInicioComponent},
     {path:'turno_cambio/:id',component:TurnoCambiarComponent},
     {path:'servicio_inicio',component:ServicioInicioComponent},
     {path:'administrador_inicio',component:AdministradorInicioComponent},
     {path:'administrador_datos',component:AdministradorDatosComponent},
     {path:'turno_nuevo',component:TurnoNuevoComponent},
     {path:'servicio_nuevo',component:ServicioNuevoComponent}]}
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MiCuentaComponent,
    ConfiguracionesComponent,
    CursosInicioComponent,
    InicioComponent,
    SucursalInicioComponent,
    TurnoInicioComponent,
    ServicioInicioComponent,
    AdministradorInicioComponent,
    CursosNuevoComponent,
    TurnoNuevoComponent,
    InscripcionAlumnoComponent,
    AlergiasNuevoComponent,
    CursosPasarComponent,
    ServicioNuevoComponent,
    CursosConfigurarComponent,
    AdministradorDatosComponent,
    LoginComponent,
    CuentaNuevaComponent,
    CursosDatosComponent,
    SucursalCambiarComponent,
    TurnoDatosComponent,
    InicioDatosComponent,
    InicioCursosComponent,
    InicioPagosComponent,
    TurnoCambiarComponent,
    SeccionInicioComponent,
    CursosListaComponent,
    ParienteNuevoComponent,
    ParienteDatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ConexionService,
    LoginService,
    AdministradoresService,
    SucursalesService,
    TurnosService,
    PersonalService,
    CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
