import { Injectable } from '@angular/core';

import { UserModel } from './types';
import { userList } from './mock-users';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'; //AngularFireList v5
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UsersService {

    user: Observable<firebase.User>;
    items: FirebaseListObservable<any[]>; //AngularFireList v5
    msgVal: string = ''

    constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {

      this.items = af.list('users', {
      query: {
        limitToLast: 50
      }
    });

    //this.items.subscribe(console.log); //dana asynchroniczna! - petla bedzie pusta, chyba ze zastosujemy preserveSnapshot
    //list all firebase users
    //
    af.list('users', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          console.log(snapshot.key, snapshot.val());
        });
    })

    this.user = this.afAuth.authState;
    }

    public geUsers(): UserModel[] {
        return userList;
    }

    public geUsersFirebase(): FirebaseListObservable<any[]> {
        return this.items;
    }

}
