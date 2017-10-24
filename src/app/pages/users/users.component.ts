import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/services/user';
import { UsersService } from '../../shared/services/users.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	public users: any;

	constructor(private usersService: UsersService) { }

	ngOnInit() {
		this.users = this.usersService.getUsers();
	}
}
