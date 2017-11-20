import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      name: new FormControl(''),
      usename: new FormControl(''),
      email: new FormControl(''),
      website: new FormControl('')
    });
  }

  onSubmit() {
    this.onAddUser.emit(this.newUser.value);
  }

}
