import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  logout(){
    this.afAuth.signOut();
    this.router.navigate([''])
  }
  isLoggedIn(){
    return !!this.afAuth.currentUser;
  }
}
 