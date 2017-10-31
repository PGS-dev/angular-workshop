import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

//guard
import { CanActivate } from '@angular/router';

//rxjs
import { Observable } from 'rxjs/Observable';

//firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'; //AngularFireList v5
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthGuardService implements CanActivate {

    user: Observable<firebase.User>;
    authState: any = null;

    constructor(
        private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router:Router
    )
    { console.log('konstruktor serwisu auth');
        this.afAuth.authState.subscribe((auth) => {
             this.authState = auth;
             console.log('authState change', this.authState);
             console.log('this.authenticated???', this.authState !== null);
             //login on start   this.emailLogin('biuro@it-inspire.pl', 'password');
         });
    };

    canActivate() {
        console.log('AuthGuard#canActivate called');
        return this.authState !== null; //this.authenticated; // true
    }

    /*get currentUserId(): string {
       return this.authenticated ? this.authState.uid : '';
    }*/

    // Returns true if user is logged in
    get authenticated(): boolean {
        return this.authState !== null;
    }

    emailLogin(email:string, password:string): Promise<string> {
        let promise = new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.authState = user;
                console.log('zwrotka user', user);
                console.log('czy zalogowany?', this.authenticated);
                resolve(this.authenticated);
            })
           .catch(error => {
               console.log(error);
               reject(error);
            });
        });

        return promise;
   }

    signOut(): void { console.log('signOut');
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    }

}
