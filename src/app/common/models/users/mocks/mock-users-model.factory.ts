import { SpyObject } from '../../../mocks/helpers';
import Spy = jasmine.Spy;
import UsersModelFactory from "../users-model.factory";
import UsersModel from "../users-model";

export class MockUsersModelFactory extends SpyObject {
  createSpy: Spy;
  users: UsersModel;

  constructor(usersData: any) {
    super(UsersModelFactory);

    this.users = new UsersModel(usersData);
    this.createSpy = this.spy('create').andReturn(this.users);
  }
}
