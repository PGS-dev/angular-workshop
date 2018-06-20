import UsersModel from './users-model';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class UsersModelFactory {
  constructor() {}

  public create(data: any): UsersModel {
    console.log(1);
    return new UsersModel(data);
  }
}
