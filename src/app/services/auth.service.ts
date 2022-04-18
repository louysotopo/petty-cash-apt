import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase  from 'firebase/compat/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : AngularFireAuth,
    private router:Router ) {
      auth.authState.subscribe(user =>{
        console.log(user);
      })

   }
   googleAuth(){
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());    
  }
  devolverUsuario(){
    return this.auth.currentUser;
  }
  logOut(){
    return this.auth.signOut();
  }

}
