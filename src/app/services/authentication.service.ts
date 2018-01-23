import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Firebase
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {

  public isLoggedIn = false;
  public displayName = null;
  public email = null;

  authStateSource = new Subject<any>();
  authState$ = this.authStateSource.asObservable();

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.authState.subscribe((auth) => {
      if (auth == null) {
        console.log("Logged out");
        this.authStateSource.next(null);
        this.isLoggedIn = false;
        this.displayName = null;
        this.email = null;
        this.router.navigate(['login']);
      } else {
        this.authStateSource.next(auth);
        this.isLoggedIn = true;
        this.displayName = auth.displayName;
        this.email = auth.email;
        console.log("Logged in");
      }
    });
  }

  signUpWithEmail(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('login success');
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }


  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.router.navigate(['/results']);
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  logout(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}
