import { Injectable } from '@angular/core';

import { UserModel } from '../types';
import { userList } from '../mock-users';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'; // AngularFireList v5
import * as firebase from 'firebase/app';

@Injectable()
export class UsersService {

    items: FirebaseListObservable<any[]>; // AngularFireList v5
    msgVal: string = '';
    state: string = '';

    constructor(public af: AngularFireDatabase, private http: HttpClient) {
        this.items = af.list('users', {
          query: {
            limitToLast: 50
          }
        });

        // this.items.subscribe(console.log); //dana asynchroniczna! - petla bedzie pusta, chyba ze zastosujemy preserveSnapshot
        // list all firebase users
        af.list('users', { preserveSnapshot: true})
        .subscribe(snapshots => {
            snapshots.forEach(snapshot => {
              // console.log(snapshot.key, snapshot.val());
            });
        });
    }

    // Observable string sources
    private searchSubjectObserver = new Subject<string>();

    // Observable string streams
    public searchStream$ = this.searchSubjectObserver.asObservable();

    // Service message commands
    public searchUsers(userName: string): void {
        this.searchSubjectObserver.next(userName);
    }

    // static resources
    public geUsers(): UserModel[] {
        return userList;
    }
    // firebase database
    public geUsersFirebase(): FirebaseListObservable<any[]> {
        return this.items;
    }

    public getAppVersion(): Observable<string> {
        const apiURL = './assets/json/config.json';
        return this.http.get(apiURL)
            .map(config => {
                console.log('v', config['version']);
                return config['version'];
            })
            .catch((err) => {
                console.error('http config error');
                return Observable.throw(err);
            });
    }

}
