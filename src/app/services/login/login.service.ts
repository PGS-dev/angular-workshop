import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private router:Router, private http: HttpClient) {}

    private userData: object = null;
    public userState: boolean = false;
    public authenticated = new BehaviorSubject(null);

    public setLoginState(login:string, password:string): Observable<boolean> {
        const apiURL = './assets/json/login.json';
        return this.http.get(apiURL)
            .map(credentials => {
                //If you use map() instead of subscribe() you can return the created Observable for the caller to subscribe. If you call subscribe() the return value will be a Subscription but that is usually not very useful for the caller
                const LOGIN = credentials['login'];
                const PASSWORD = credentials['password'];
                let verified:boolean = (login === LOGIN && password === PASSWORD);
                this.userState = verified;
                this.authenticated.next(verified);
                console.log('setLoginState?', verified);
                return verified;
            })
    }

    public getLoginState(): boolean {
        console.log('login serwis zwraca ',  this.userState);
        return this.userState;
    }
}
