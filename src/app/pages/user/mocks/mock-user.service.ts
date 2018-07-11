import { SpyObject } from '../../../common/mocks/helpers';
import { UserService } from '../user.service';
import Spy = jasmine.Spy;
import {of} from "rxjs/index";

export class MockUserService extends SpyObject {
  getUserQueryAngularFirestoreCollectionSpy: Spy;
  userData: any;

  constructor(userData: any) {
    super(UserService);

    this.userData = userData;
    this.getUserQueryAngularFirestoreCollectionSpy = this.spy('getUserQueryAngularFirestoreCollection').andReturn(
      {
        valueChanges: () => {
          return of(this.userData);
        }
      }
    );
  }
}
