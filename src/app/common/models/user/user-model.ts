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
}
