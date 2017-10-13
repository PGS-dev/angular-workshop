import { Injectable } from '@angular/core';

import { UserModel } from './types';
import { userList } from './mock-users';

@Injectable()
export class UsersService {

  constructor() {}

  public geUsers(): UserModel[] {
      return userList;
  }

}
