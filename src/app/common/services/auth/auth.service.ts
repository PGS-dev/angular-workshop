import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {auth} from "firebase";
import UserCredential = firebase.auth.UserCredential;
import {map, take} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth
  ) {}

  public isLogged(): Observable<any> {
    return this.afAuth.authState
      .pipe(
        take(1),
        map(user => {
          return !!user
        }));
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
