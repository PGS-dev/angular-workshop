import UserModel from './user-model';
import {Injectable} from "@angular/core";
import {UserModule} from "../../../pages/user/user.module";

@Injectable({
  providedIn: UserModule
})
export class UserModelFactory {
  constructor() {}

  public create(data: any): UserModel {
    return new UserModel(data);
  }
}
