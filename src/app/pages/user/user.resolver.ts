import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {UserDetailsInterface, UserService} from '../../services/user.service';

@Injectable()
export class UserResolver implements Resolve<UserDetailsInterface[]> {
    constructor(private usersService: UserService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.usersService.getDetails(route.params.id);
    }
}
