import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {UserI} from '../interfaces/user.interface';

@Injectable()
export class UsersService {
    private USER_URL = 'https://jsonplaceholder.typicode.com/users/';

    constructor(private http: Http) {
    }

    getUsers(): Observable<UserI> {
        return this.http.get(this.USER_URL)
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err.json().error) || 'BE...');
    }

    getUser(uid: number): Observable<UserI> {
        return this.http.get(`${this.USER_URL}${uid}`)
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err.json().error) || 'BE...');
    }
}
