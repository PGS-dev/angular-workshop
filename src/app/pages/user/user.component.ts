import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/services/user';
import { UsersService } from '../../shared/services/users.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit, OnDestroy {
	
	public user: User;
	public errorMessage: string;
	private subscr: any;
	
	constructor(private route: ActivatedRoute, private usersService: UsersService) { }

	ngOnInit() {
		this.subscr = this.route.params.subscribe(params => {
			this.usersService.getUser(params.id).subscribe((user: User) => {
				this.user = user;
			}, (error) => {
				this.errorMessage = error.message;
			})
		});
	}

	ngOnDestroy() {
		this.subscr.unsubscribe();
	}
}
