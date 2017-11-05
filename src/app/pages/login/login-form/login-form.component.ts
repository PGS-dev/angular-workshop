import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  human: object = {
    username: '',
    password: ''
  };

  @Output() onLogin: EventEmitter<object> = new EventEmitter<object>();

  onSubmit() {
    this.onLogin.emit(this.human);
  }

  constructor() {}
}
