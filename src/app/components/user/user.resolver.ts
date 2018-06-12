import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import UserModel from "../../common/models/user/user-model";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserResolver implements Resolve<UserModel> {
  private USER_URL = 'https://jsonplaceholder.typicode.com/users/1';

  constructor(
    private http: HttpClient
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserModel> {
    return this.http.get<UserModel>(this.USER_URL);
  }
}
