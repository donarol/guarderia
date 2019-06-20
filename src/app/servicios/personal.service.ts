import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Personal } from '../Interfaces/personal';
import { Sucursal } from '../Interfaces/sucursal';
//import { resolve } from 'path';
//import { reject } from 'q';
@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private personalCollection:AngularFirestoreCollection<Personal>;
  private personal:Observable<Personal[]>;

  private sucursalCollection:AngularFirestoreCollection<Sucursal>;
  private sucursal:Observable<Sucursal[]>;
  private sucursales:Sucursal[];

  constructor(private afData: AngularFirestore) {
    this.personalCollection=this.afData.collection<Personal>('personal');
    this.sucursalCollection=this.afData.collection<Sucursal>('sucursales');
   }
   private configuraSucursal(){
    this.sucursal=this.sucursalCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Sucursal;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }
   private configuraPersonal(){
    this.personal=this.personalCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Personal;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }
   getLugarPersonal(administrador:string){
    var promise =new Promise((resolve,reject)=>{
      console.log("se recibio: "+administrador);
      this.configuraSucursal()
      this.configuraPersonal()
      this.personal.subscribe(per_0=>{
        per_0.forEach(persona=>{
          console.log("se entro con: "+persona.id)
          persona.administradores.forEach(datos=>{
            console.log("datos: "+datos)
            if(datos===administrador){
              console.log("se encontro: "+persona.id)
              this.sucursal.subscribe(sucursal=>{
                sucursal.forEach(suc=>{
                  console.log("se ve el lugar: "+suc.id);
                  if(persona.id===suc.id){
                    console.log("se encontro el lugar")
                    console.log(suc.nombre)
                    resolve(suc);
                  }
                })
              })
            }
          })
        })
      })
    })
    return promise
   }
   
   /*
  getLugarPersonal(administrador:string){
    console.log("se recibio "+administrador);
    this.sucursal=this.sucursalCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Sucursal;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );    
    this.personal=this.personalCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Personal;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.personal.subscribe(personal=>{
      personal.forEach(per=>{
        console.log("se entra con: "+per.id)
        per.administradores.forEach(adm=>{
          console.log("datos: "+adm)
          if (adm===administrador) {
            console.log("se encontro")
            console.log("en el lugar: "+per.id)
            this.sucursal.subscribe(sucursal=>{
              sucursal.forEach(element => {
                console.log("se ve el lugar: "+element.id);
                if(element.id===per.id){
                  console.log("se encontro el lugar")
                  console.log(element.nombre)
                }
              });
            })
          }
        })
      })
    })CORRECTO*/
    

    /* CONSULTA
    const queryObservable=this.sucursal.pipe(
      switchMap(size => 
        this.afData.collection('administradores', ref => ref.where('carnet', '==','9209342')).valueChanges()
      )
    );
    queryObservable.subscribe(queriedItems => {
      console.log("entro")
      console.log(queriedItems);  
    });*/
    

       
  /*  this.personal=this.personalCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.personal.subscribe(i=>{
      var extra=i["0"]
      console.log(extra);
    })*/
  /*  this.personal=this.personalCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
      return this.personal;*/
    /*const size$ = new Subject<string>();
    const queryObservable = size$.pipe(
      switchMap(size => 
        afs.collection('items', ref => ref.where('size', '==', size)).valueChanges()
      )
    );*/
 //FINAL FUNCION PRUEBA }
  
}
