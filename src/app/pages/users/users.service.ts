import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private db: AngularFirestore
  ) {}

  public getUsersAngularFirestoreCollection(): AngularFirestoreCollection<any> {
    return this.db.collection('users');
  }
}
