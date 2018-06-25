import { SpyObject } from '../../../common/mocks/helpers';
import { UsersService } from '../users.service';
import Spy = jasmine.Spy;

export class UsersServiceMock extends SpyObject {
  getUsersSpy: Spy;
  fakeResponse: any;

  constructor() {
    super(UsersService);

    this.fakeResponse = null;
    this.getUsersSpy = this.spy('getAll').andReturn(this);
  }

  public subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  public setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
