import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

//guard
import { CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private router:Router,
        private loginService: LoginService,
    ){};

    canActivate() {
        let verified:boolean = this.loginService.getLoginState();
        console.log('zwrotka z serwisu w authguard', verified);
        if(!verified) {
            this.router.navigate(['./login']);
        }
        return verified;
    }
}
