import { Injectable } from '@angular/core';
/*import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';*/

import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class ConexionService {
 /* private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;*/
  constructor(/*private afs: AngularFirestore*/private afAuth:  AngularFireAuth) {
    console.log("funcionando servicios");
    /*this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();*/
   }
   email:string='mancachirolando@gmail.com';
   pass:string='Sam7121995';
  login() {
    this.existe();
    console.log("entor");

  }
  logout() {
    this.afAuth.auth.signOut();
  }
  existe(){
    this.afAuth.auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log("existe");
        
        console.log( user.displayName);
        console.log( user.email);
          console.log( user.emailVerified);
            console.log( user.photoURL);
              console.log( user.isAnonymous);
                console.log( user.uid);
                  console.log( user.providerData);
        // ...
      } else {
        console.log("no existe");
        this.afAuth.auth.signInWithEmailAndPassword(this.email,this.pass).then(function(){
          console.log("se logio");
        }).catch(function(){
          console.log("no se logio");
        });
      }
    });
  }
}
