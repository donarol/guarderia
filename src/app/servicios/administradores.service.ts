import { Injectable } from '@angular/core';

import { Administrador} from '../Interfaces_2/administrador';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AdministradoresService {
  private administradorCollection:AngularFirestoreCollection<Administrador>;
  private administradorDocument: AngularFirestoreDocument<Administrador>;
  private administradores:Observable<Administrador[]>;
  private administrador:Observable<Administrador>;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
 
  constructor(private afData:AngularFirestore,private afAuth:AngularFireAuth,private afStore: AngularFireStorage) { 
    this.administradorCollection=this.afData.collection<Administrador>('administradores');
  //  this.afStore.ref
  }  
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.afStore.ref(filePath);
    const task = this.afStore.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()
  }
  
  getAdministradores(){
    //this.administradorCollection=this.afData.collection<Administrador>('');
    this.administradores=this.administradorCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Administrador;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.administradores;

    /*console.log("hola: "+this.administradorCollection);
    this.administradores=this.administradorCollection.valueChanges();
    return this.administradores;*/
  }
  getAdministrador(uid){
    this.administradorDocument=this.afData.doc<Administrador>(`administradores/${uid}`);

    return this.administradorDocument.valueChanges();
  }
  nuevoAdministrador(email:string,password:string,nuevoAdmin:Administrador){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password).then(function(){
      console.log("se creo la cuenta");
    }).catch(function(){
      console.log("error al crear la cuenta");
    })
  }

  crearCuenta(email:string,password:string){
    var promise=new Promise((resolve,reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,password).then(res =>{
        if(res){
          console.log("se creo");
          resolve(true);
        }else{
          console.log("no se creo");
          resolve(false);
        }
      })
    })
    return promise;
  }
  guardaCuenta1(uid,admin){
    var promise=new Promise((resolve,reject)=>{
      this.administradorCollection.doc(uid).set(admin)
      
    })
    
  }
  guardaCuenta(uid,ad:Administrador){
    this.administradorCollection.doc(uid).set(ad).then(function(){
      console.log("se guardo");
      return true;
    }).catch(function(){
      console.log("no se guardo");
      return false;
    })
  }
  /*
  guardaCuenta(uid:string,admin:Administrador){
    var promise=new Promise((resolve,reject)=>{
      this.administradorCollection.doc(uid).set(admin).then(res =>{
        if(res){
          resolve(true);
        }
      })
    })
  }*/
  
  agregar(ad:Administrador){
    this.administradorCollection.add(ad);
  }
  
}
