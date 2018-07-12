import {Component, OnChanges, OnInit} from '@angular/core';
import UserModel from "../../common/models/user/user-model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'aw3-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit, OnChanges {
  public user: UserModel;
  public userForm: FormGroup;

  constructor(
    private fb: FormBuilder
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

  public rebuild(): void {
    // this.userForm.reset({
    //   name: this.user.name
    // });
  }

  public onSubmit(): any {
    const userData = {
      id: this.userForm.value.id,
      name: this.userForm.value.name,
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      address: {
        street: this.userForm.value.addressStreet,
        city: this.userForm.value.addressCity
      },
      phone: this.userForm.value.phone,
      website: this.userForm.value.website,
      company: {
        street: this.userForm.value.companyStreet,
        name: this.userForm.value.companyName
      }
    };

    this.user = new UserModel(userData);

    if (!this.userForm.invalid) {
      this.user.saveUserInDb(this.user);
    }
  }

  ngOnChanges(): void {
    this.rebuild();
  }

  ngOnInit() {}
}
