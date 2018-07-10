import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {auth} from "firebase";
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth
  ) {}

  public isLogged(): boolean {
    return this.afAuth.auth.currentUser !== null;
  }

  public logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  public loginWithFacebook(): Promise<UserCredential> {
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  public loginWithGithub(): Promise<UserCredential> {
    return this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
  }
}
