import { Injectable } from '@angular/core';
import { Turno} from '../Interfaces_2/turno';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sucursal } from '../Interfaces_2/sucursal';
@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  private turnoCollection:AngularFirestoreCollection<Turno>;
  private turnos:Observable<Turno[]>;

  private turnoDocument: AngularFirestoreDocument<Turno>;
  constructor(private afData: AngularFirestore) { }
  getTurnos(sucursal:any){    
    this.turnoCollection=this.afData.collection<Turno>(`sucursales/${sucursal.id}/turnos`);
    this.turnos=this.turnoCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Turno;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
    return this.turnos;
  }
  getTurno(uidTurno:Turno,uidSucursal:Sucursal){
    console.log("el Turno: "+uidTurno)
    console.log("la sucursal: "+uidSucursal)
    this.turnoDocument=this.afData.doc<Turno>(`sucursales/${uidSucursal.id}/turnos/${uidTurno}`);
    console.log(this.turnoDocument.valueChanges());
    return this.turnoDocument.valueChanges();
  }
  getTurno_1(uidTurno:string,uidSucursal:Sucursal){
    console.log("el Turno: "+uidTurno)
    console.log("la sucursal: "+uidSucursal)
    this.turnoDocument=this.afData.doc<Turno>(`sucursales/${uidSucursal.id}/turnos/${uidTurno}`);
    console.log(this.turnoDocument.valueChanges());
    return this.turnoDocument.valueChanges();
  }
}
