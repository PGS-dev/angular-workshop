import UserModel from "../user/user-model";

export default class UsersModel {
  private users: UserModel[];

  constructor(usersCollection: UserModel[]) {
    this.users = usersCollection;
  }

  public getUsers(): UserModel[] {
    return this.users;
  }
}
