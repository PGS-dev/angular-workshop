import { Component, OnInit } from '@angular/core';

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

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  login = new Login();

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.login);
    this.authenticationService.loginWithEmail(this.login.email, this.login.password).then( () => {
      console.log('success!!!');
    });
  }
}
