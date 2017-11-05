import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit, OnDestroy {

  public user: User;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
  }

  ngOnDestroy() { }
}
