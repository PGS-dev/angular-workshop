import { SpyObject } from '../../../common/mocks/helpers';
import { UsersService } from '../users.service';
import Spy = jasmine.Spy;
import {of} from "rxjs/index";

export class MockUsersService extends SpyObject {
  getUsersAngularFirestoreCollectionSpy: Spy;
  usersData: any;

  constructor(usersData: any) {
    super(UsersService);

    this.usersData = usersData;
    this.getUsersAngularFirestoreCollectionSpy = this.spy('getUsersAngularFirestoreCollection').andReturn(
      {
        valueChanges: () => {
          return of(this.usersData);
        }
      }
    );
  }
}
