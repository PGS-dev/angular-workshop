import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class LoginService {
    constructor(private router:Router) { }

    private userData: object = null;
    private userState: boolean = false;

    public setLoginState(login:string, password:string): boolean {
        const LOGIN = 'biuro@it-inspire.pl';
        const PASSWORD = 'password';
        let verified:boolean = login === LOGIN && password === PASSWORD;

        this.userState = verified;
        console.log('zwrotka logowania', this.userState);
        if (!verified) {
            this.router.navigate(['./login']);
        }
        return this.userState;
    }

    public getLoginState(): boolean {
        console.log('login serwis zwraca ',  this.userState);
        return this.userState;
    }
}
