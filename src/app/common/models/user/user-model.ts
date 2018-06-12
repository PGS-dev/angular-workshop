import IUser from "./user";

export default class UserModel implements IUser {
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public address: any;
  public phone: string;
  public website: string;
  public company: object;

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
}
