import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {

  constructor() { }

  newUser: FormGroup;

  @Output() onAddUser: EventEmitter<object> = new EventEmitter<object>();

  ngOnInit() {
    this.newUser = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.onAddUser.emit(this.newUser.value);
  }

}
