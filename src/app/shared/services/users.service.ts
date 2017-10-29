import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    private API_URL = 'https://jsonplaceholder.typicode.com/users'

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get(this.API_URL).map((users: User[]) => users);
    }

    getUser(id: number) {
        return this.http.get(`${this.API_URL}/${id}`).map((user: User) => user)
    }
}