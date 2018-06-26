import UserModel from './user-model';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class UserModelFactory {
  constructor() {}

  public create(data: any): UserModel {
    return new UserModel(data);
  }
}
