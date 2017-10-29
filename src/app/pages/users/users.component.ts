import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../shared/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

	public users: User[];

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.users = this.route.snapshot.data['users'];
	}

	ngOnDestroy() { }
}
