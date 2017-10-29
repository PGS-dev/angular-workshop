import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/services/user';

@Injectable()
export class UserResolver implements Resolve<User> {
    constructor(private usersService: UsersService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        return this.usersService.getUser(route.params['id']);
    }
}