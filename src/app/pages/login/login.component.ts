import { Component, OnInit } from '@angular/core';

// Models
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  login = new Login();

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.login);
  }

}
