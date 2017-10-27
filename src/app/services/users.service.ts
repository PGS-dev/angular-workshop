import { Injectable } from '@angular/core';

import { UserModel } from './types';
import { userList } from './mock-users';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription }   from 'rxjs/Subscription';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'; //AngularFireList v5
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UsersService {

    user: Observable<firebase.User>;
    items: FirebaseListObservable<any[]>; //AngularFireList v5
    msgVal: string = '';
    state: string = '';

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

    // Observable string sources
    private searchSubjectObserver = new Subject<string>();

    // Observable string streams
    public searchStream$ = this.searchSubjectObserver.asObservable(); //asObservable uniemozliwia wykonania next na resault ?

    // Service message commands
    public searchUsers(userName: string): void {
        console.log('wyszukiwarka zglasza next!', userName);
        this.searchSubjectObserver.next(userName);
    }

    public getState(): string {
        return this.state;
    }

    public setState(componentState: string): void {
        this.state = componentState;
    }

    //static resources
    public geUsers(): UserModel[] {
        return userList;
    }
    //firebase database
    public geUsersFirebase(): FirebaseListObservable<any[]> {
        return this.items;
    }

}
