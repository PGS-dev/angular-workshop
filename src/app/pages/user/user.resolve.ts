import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UsersService, User } from '../../shared/services/users.service';

@Injectable()
export class UserResolver implements Resolve<User> {
    constructor(private usersService: UsersService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        return this.usersService.getUser(route.params['id']);
    }
}
