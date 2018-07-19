import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user/user.service";
import {ActivatedRoute} from "@angular/router";
import {UserModelFactory} from "../../common/models/user/user-model.factory";
import {Subscription} from "rxjs/index";
import UserModel from "../../common/models/user/user-model";

@Component({
  selector: 'aw3-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {
  public user: UserModel;
  public userForm: FormGroup;
  public userSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private userModelFactory: UserModelFactory
  ) {}

  public createForm(): void {
    const uid = this.route.snapshot.params.id;

    this.userSub = this.userService.getUserQueryAngularFirestoreCollection(uid).valueChanges().subscribe((users) => {
      this.user = this.userModelFactory.create(users[0]);

      this.userForm = this.fb.group({
        id: [this.user.id],
        name: [this.user.name, Validators.required ],
        username: [this.user.username, Validators.required ],
        email: [this.user.email, Validators.required ],
        addressStreet: [this.user.address.street, Validators.required ],
        addressCity: [this.user.address.city, Validators.required ],
        phone: [this.user.phone, Validators.required ],
        website: [this.user.website, Validators.required ],
        companyStreet: [this.user.company.street, Validators.required ],
        companyName: [this.user.company.name, Validators.required ]
      });
    });
  }

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
      this.userService.editUserInAngularFirestoreCollection(this.user)
        .then((successMessage) => {
          console.log(successMessage);
        })
        .catch((errorMessage) => {
          console.error(errorMessage);
        });
    }
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
