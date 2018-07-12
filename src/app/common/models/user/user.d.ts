export default interface IUser {
  id: null | number; // null for case of user creation.
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: object;
}
