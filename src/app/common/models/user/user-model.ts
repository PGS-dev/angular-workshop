import IUser from "./user";

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
      street: userData.address ? userData.address.street : userData.addressStreet,
      city: userData.address ? userData.address.city : userData.addressCity
    };
    this.phone = userData.phone;
    this.website = userData.website;
    this.company = {
      street: userData.company ? userData.company.street : userData.companyStreet,
      name: userData.company ? userData.company.name : userData.companyName
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
