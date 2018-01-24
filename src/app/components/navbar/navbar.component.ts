import { Component, OnInit } from '@angular/core';

// Services

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean;

  constructor(
    public authenticationService: AuthenticationService
  ) {
    this.authenticationService.authState$.subscribe(user => {
      if (user == null) {
        this.isLogin = false;
      }else {
        this.isLogin = true;
      }

    });
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }
}
