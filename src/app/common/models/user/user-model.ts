import IUser from "./user";

export default class UserModel implements IUser {
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public address: {
    street: string,
    city: string
  };
  public phone: string;
  public website: string;
  public company: {
    street: string,
    name: string
  };

  constructor(userData: any) {
    this.id = userData.id;
    this.name = userData.name;
    this.username = userData.username;
    this.email = userData.email;
    this.address = userData.address;
    this.phone = userData.phone;
    this.website = userData.website;
    this.company = userData.company;
  }

  public saveUserInDb(user: UserModel): void {
    // Define uid somehow.
    console.log('saveUser() method called with:\n', user);
  }
}
