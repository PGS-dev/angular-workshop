import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/index";

import UsersModel from "../../common/models/users/users-model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private USERS_URL: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) {}

  public getUsers(): Observable<UsersModel> {
    return this.http.get<UsersModel>(this.USERS_URL);
  }

  public addUser(toCollection): void {

  }
}
