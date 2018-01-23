import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Login } from '../../models/login';

// Servies
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new Login();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit () {
    if (this.authenticationService.isLoggedIn) {
      this.router.navigate(['/results']);
    }

  }

  onSubmit() {
    this.authenticationService.loginWithEmail(this.login.email, this.login.password);
  }
}
