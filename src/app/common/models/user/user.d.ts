export default interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string,
    city: string
  };
  phone: string;
  website: string;
  company: {
    street: string,
    name: string
  };
}
