import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {ISubscription} from 'rxjs/Subscription';
import {User} from '../../models/user.model';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
    constructor(private usersService: UsersService) {
    }

    users: User[];
    private sub: ISubscription;

    getUsers() {
        this.sub = this.usersService.getUsers()
            .subscribe(
                (users) => {
                    this.users = users;
                },
                (err) => {
                    throw new Error(err);
                }
            );
    }

    ngOnInit() {
        this.getUsers();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
