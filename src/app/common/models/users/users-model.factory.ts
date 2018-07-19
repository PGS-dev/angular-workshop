import UsersModel from './users-model';
import {Injectable} from "@angular/core";
import {UsersModule} from "../../../pages/users/users.module";

@Injectable({
  providedIn: UsersModule
})
export class UsersModelFactory {
  constructor() {}

  public create(data: any): UsersModel {
    return new UsersModel(data);
  }
}
