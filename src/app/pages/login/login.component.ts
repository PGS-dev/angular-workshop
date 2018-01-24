import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit () {
    if (this.activatedRoute.snapshot.data['state'] != null) {
      this.router.navigate(['/results']);
    }
  }

  onSubmit() {
    this.authenticationService.loginWithEmail(this.login.email, this.login.password);
  }
}
