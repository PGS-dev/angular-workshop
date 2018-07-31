import UsersModel from './users-model';
import {Injectable} from "@angular/core";

@Injectable()
export class UsersModelFactory {
  constructor() {}

  public create(data: any): UsersModel {
    return new UsersModel(data);
  }
}
