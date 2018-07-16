import {Component, OnChanges, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import UserModel from "../../common/models/user/user-model";
import { UserService } from "../user/user.service";
import UserModelFactory from "../../common/models/user/user-model.factory";

@Component({
  selector: 'aw3-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit, OnChanges {
  public user: UserModel;
  public userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private userModelFactory: UserModelFactory
  ) {
      this.createForm();
  }

  public createForm(): void {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', Validators.required ],
      username: ['', Validators.required ],
      email: ['', Validators.required ],
      addressStreet: ['', Validators.required ],
      addressCity: ['', Validators.required ],
      phone: ['', Validators.required ],
      website: ['', Validators.required ],
      companyStreet: ['', Validators.required ],
      companyName: ['', Validators.required ],
    });
  }

  public rebuild(): void {}

  public onSubmit(): any {
    const userData = {
      id: this.userForm.value.id,
      name: this.userForm.value.name,
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      addressStreet: this.userForm.value.addressStreet,
      addressCity: this.userForm.value.addressCity,
      phone: this.userForm.value.phone,
      website: this.userForm.value.website,
      companyStreet: this.userForm.value.companyStreet,
      companyName: this.userForm.value.companyName
    };

    this.user = this.userModelFactory.create(userData);

    if (!this.userForm.invalid) {
      this.userService.saveUserInAngularFirestoreCollection(this.user)
        .then((successMessage) => {
          console.log(successMessage);
        })
        .catch((errorMessage) => {
          console.error(errorMessage);
        });
    }
  }

  ngOnChanges(): void {
    this.rebuild();
  }

  ngOnInit() {}
}
