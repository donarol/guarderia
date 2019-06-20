import { Injectable } from '@angular/core';
import { Sucursal} from '../Interfaces_2/sucursal';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  private sucursalCollection:AngularFirestoreCollection<Sucursal>;
  private sucursales:Observable<Sucursal[]>;

  private sucursalDocument:AngularFirestoreDocument<Sucursal>;

  constructor(private afData: AngularFirestore) {}

  getSucursales(){    
    this.sucursalCollection=this.afData.collection<Sucursal>('sucursales');
    this.sucursales=this.sucursalCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Sucursal;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
    return this.sucursales;
  }
  update(sucursal:Sucursal){
    this.afData.doc<Sucursal>(`sucursales/${sucursal.id}`).update(sucursal);
  }
}
