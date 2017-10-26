import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../shared/services/user';
import { UsersService } from '../../shared/services/users.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

	public users: User[];
	public errorMessage: string;
	private subscr: any;

	constructor(private usersService: UsersService) { }

	ngOnInit() {
		this.subscr = this.usersService.getUsers().subscribe((users: User[]) => {
			this.users = users;
		}, (error) => {
			this.errorMessage = error.message;
		});
	}

	ngOnDestroy() {
		this.subscr.unsubscribe();
	}
}
