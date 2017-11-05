import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authservice: AuthService) { }

  onUserLogin(user) {
    this.authservice.onLogin(user.username, user.password);
  }
}
