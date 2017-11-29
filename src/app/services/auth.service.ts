import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isAuthenticated:boolean;

  constructor(public router: Router) { }

  authenticate(user:string, password:string):boolean {
    if (user == 'admin@admin' && password == 'admin') {
      this.isAuthenticated = true;
      this.router.navigate(['/users']);
      return true;
    }
    
    return false;
  }

  getAuthenticatedState():boolean {
      return this.isAuthenticated;
  }

}
