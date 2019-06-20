import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from '../Interfaces_2/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursoCollection:AngularFirestoreCollection<Curso>;
  private cursos:Observable<Curso[]>;
  constructor(private afData: AngularFirestore) {
    
    this.cursoCollection=this.afData.collection<Curso>(`sucursales/L0LUulv8WURnalYBxJLK/cursos`);
   }
  
  getCursos(sucursal:any){
    this.cursoCollection=this.afData.collection<Curso>(`sucursales/${sucursal.id}/cursos`);
    this.cursos=this.cursoCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Curso;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
    return this.cursos;
  }
  addCurso(uidSucursal,curso:Curso){    
    this.afData.collection<Curso>(`sucursales/${uidSucursal}/cursos`).add(curso);
   // this.cursoCollection.add(curso)
  /* this.cursoCollection.doc("asdasrewfcwef").set(curso).then(res=>{
     console.log("se curgar")
   })*/
  }
}
