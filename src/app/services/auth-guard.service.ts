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

    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router:Router) { console.log('konstruktor serwisu auth');
        this.afAuth.authState.subscribe((auth) => {
             this.authState = auth;
             console.log('authState change', this.authState);
             //login on start       this.emailLogin('biuro@it-inspire.pl', 'password13');
         });
    };

    canActivate() {
        console.log('AuthGuard#canActivate called');
        return true//this.authenticated;
    }

    get currentUserId(): string {
       return this.authenticated ? this.authState.uid : '';
    }

    // Returns true if user is logged in
    get authenticated(): boolean { console.log('this.authenticated', this.authState !== null);
        return this.authState !== null;
    }

    emailLogin(email:string, password:string) { console.log('loguje ', email);
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            this.authState = user;
            console.log('zwrotka user', user);
            console.log('czy zalogowany?', this.authenticated);
            //this.updateUserData();
        })
       .catch(error => console.log(error));
   }

    signOut(): void { console.log('signOut');
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    }

     // Writes user name and email to realtime db
    private updateUserData(): void {
        let path = `users/${this.currentUserId}`;
        let data = {
                      email: this.authState.email,
                      name: this.authState.displayName
                    }
        this.db.object(path).update(data)
        .catch(error => console.log(error));
        }
    }
