import { SpyObject } from '../../../mocks/helpers';
import Spy = jasmine.Spy;
import UserModelFactory from "../user-model.factory";
import UserModel from "../user-model";

export class MockUserModelFactory extends SpyObject {
  createSpy: Spy;
  user: null|UserModel;

  constructor(userData: any) {
    super(UserModelFactory);

    this.user = new UserModel(userData);
    this.createSpy = this.spy('create').andReturn(this.user);
  }
}
