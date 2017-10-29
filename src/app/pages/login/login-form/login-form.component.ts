import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Output() passwordTyped: EventEmitter<string> = new EventEmitter<string>(); 

  onInputChanged(value: string) {
    this.passwordTyped.emit(value);
  }

  constructor() { }

}
