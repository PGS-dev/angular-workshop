import { SpyObject } from '../../../common/mocks/helpers';
import { UsersService } from '../users.service';
import Spy = jasmine.Spy;

/**
 * Mock of observable for users.
 */
export class MockUsersService extends SpyObject {
  getUsersSpy: Spy;
  fakeResponse: any;

  constructor() {
    super(UsersService);

    this.fakeResponse = null;
    this.getUsersSpy = this.spy('getUsers').andReturn(this);
  }

  public subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  public setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
