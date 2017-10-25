import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../../models/users.model';


@Injectable()
export class ApiService {

  private test: any;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('./assets/mockData/listOfUsers.json');
  }

  set(data: string): void {
    this.test = data;
  }

  getData(): string {
    return this.test;
  }

}
