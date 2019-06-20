import { Injectable } from '@angular/core';
import { Seccion} from '../Interfaces_2/seccion';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sucursal } from '../Interfaces/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {
  private seccionCollection:AngularFirestoreCollection<Seccion>;
  private secciones:Observable<Seccion[]>;

  
  private seccionDocument: AngularFirestoreDocument<Seccion>;
  constructor(private afData: AngularFirestore) { }
  getSecciones(sucursal:any){    
    this.seccionCollection=this.afData.collection<Seccion>(`sucursales/${sucursal.id}/secciones`);
    this.secciones=this.seccionCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Seccion;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
    return this.secciones;
  } 
   getSeccion(uidSeccion:string,uidSucursal:Sucursal){
    this.seccionDocument=this.afData.doc<Seccion>(`sucursales/${uidSucursal.id}/secciones/${uidSeccion}`);
    return this.seccionDocument.valueChanges();
  }
}
