import { AngularFirestore } from "angularfire2/firestore";

import IUser from "./user";
import IUserDto from "./user-dto";
import UserDtoModel from "./user-dto-model";

export default class UserModel implements IUser {
  public id: string;
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
    this.address = {
      street: userData.addressStreet,
      city: userData.addressCity
    };
    this.phone = userData.phone;
    this.website = userData.website;
    this.company = {
      street: userData.companyStreet,
      name: userData.companyName
    };
  }

  public getUserData(): any {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      email: this.email,
      address: this.address,
      phone: this.phone,
      website: this.website,
      company: this.company
    };
  }
}
