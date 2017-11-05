import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private isLoggedIn: boolean;

    constructor(private router: Router) {
        this.isLoggedIn = false;
    }

    onLogin(username: string, password: string) {
        if (username === 'admin' && password === 'admin') {
            this.isLoggedIn = true;
            window.localStorage.setItem('isloggedIn', 'true');
            this.router.navigate(['/users']);
        }
    }

    onLogOut() {
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
    }

    getUserLoggedStatus() {
        return this.isLoggedIn;
    }
}
