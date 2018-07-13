import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import UserModel from "../../common/models/user/user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private db: AngularFirestore
  ) {}

  /**
   * Returns AngularFirestoreCollection filtered by query `'id', '==', uid`.
   *
   * Remember that when using db.collection you'll always retrieve Array (with one element inside in this case)
   * so you need to extract it when subscribed.
   *
   * Be careful of passed data types. When uid type is different type than the one defined in Firebase the code breaks
   * with no log whatsoever - `uid` must be the same type in code and Firebase db.
   */
  public getUserQueryAngularFirestoreCollection(uid: number): AngularFirestoreCollection<any> {
    return this.db.collection('users', ref => ref.where('id', '==', uid));
  }

  public saveUserInAngularFirestoreCollection(user: UserModel): Promise<string> {
    const uid = this.db.createId();
    const userData = user.getUserData();
          userData.id = uid;

    return new Promise((resolve, reject) => {
      this.db.collection('users')
        .doc(userData.id)
        .set(userData)
        .then(() => {
          resolve('User added.');
        })
        .catch(() => {
          reject('User not added - BE error.');
        });
    });
  }
}
