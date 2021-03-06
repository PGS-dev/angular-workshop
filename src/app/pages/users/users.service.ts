import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {UsersModule} from "./users.module";

@Injectable()
export class UsersService {
  constructor(
    private db: AngularFirestore
  ) {}

  public getUsersAngularFirestoreCollection(): AngularFirestoreCollection<any> {
    return this.db.collection('users');
  }

  public getMockUsersJSONFromAssets(): Promise<any> {
    return fetch('assets/mock-users.json');
  }
}
