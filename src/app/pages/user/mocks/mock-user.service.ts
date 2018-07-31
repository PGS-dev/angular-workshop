import { SpyObject } from '../../../common/mocks/helpers';
import { UserService } from '../user.service';
import Spy = jasmine.Spy;
import {of} from "rxjs/index";

export class MockUserService extends SpyObject {
  getUserQueryAngularFirestoreCollectionSpy: Spy;
  saveUserInAngularFirestoreCollectionSpy: Spy;
  editUserInAngularFirestoreCollectionSpy: Spy;
  userData: any;

  constructor(userData: any) {
    super(UserService);

    this.userData = userData;
    this.getUserQueryAngularFirestoreCollectionSpy = this.spy('getUserQueryAngularFirestoreCollection').and.returnValue(
      {
        valueChanges: () => {
          return of(this.userData);
        }
      }
    );
    this.saveUserInAngularFirestoreCollectionSpy = this.spy('saveUserInAngularFirestoreCollection').and.returnValue(
      new Promise((resolve) => {
        resolve('Saved.');
      })
    );
    this.editUserInAngularFirestoreCollectionSpy = this.spy('editUserInAngularFirestoreCollection').and.returnValue(
      new Promise((resolve) => {
        resolve('Edited.');
      })
    );
  }
}
