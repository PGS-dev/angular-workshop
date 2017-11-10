import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

// services
import { UsersService } from './../../services/users/users.service';

@Injectable()
export class UsersResolver implements Resolve<any> {
  constructor(private usersService: UsersService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.usersService.getAppVersion();
  }
}
