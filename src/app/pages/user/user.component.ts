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

  user: User;
  private subscr: any;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {}

  ngOnInit() {
    this.subscr = this.route.params.subscribe(params => {
       this.user = this.usersService.getUser(params.id);
    });
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
  }
}
