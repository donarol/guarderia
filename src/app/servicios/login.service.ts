import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

//import 'rxjs/add/operator/map'
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
export interface Item { name: string; }
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private itemDoc: AngularFirestoreDocument<Item>;
   re:string;

  constructor(private afAuth: AngularFireAuth,private afData: AngularFirestore) {}

  login(email:string,pass:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,pass).then(function(){
      console.log("se logio");
      location.reload();
    }).catch(function(){
      console.log("no se logio");
    });
  }  

  logout() {
    this.afAuth.auth.signOut().then(function(){
      location.reload();
    });
  }

  getExiste(){
    var promise = new Promise((resolve, reject) => {
      this.afAuth.authState.subscribe(res => {
        if (res && res.uid) {
          console.log('user is logged in');
          resolve(res.uid);
        } else {
          console.log('user not logged in');
          
          resolve(false);
        }
      });
    });
    return promise;
  }
  existe(){
    var promise = new Promise((resolve, reject) => {
      this.afAuth.authState.subscribe(res => {
        if (res && res.uid) {
          console.log('user is logged in');
          resolve(true);
        } else {
          console.log('user not logged in');
          resolve(false);
        }
      });
    });
    return promise;
  }
  /*
  Así es como usarías la función:
  this.auth.isLoggedIn().then(
    (val) => {
      if(val){

        //Do your re-direct

      }else{
        //send alert or something
      }
    }
  );*/
}
