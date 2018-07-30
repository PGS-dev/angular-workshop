import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user/user.service";
import {ActivatedRoute} from "@angular/router";
import {UserModelFactory} from "../../common/models/user/user-model.factory";
import {Subscription} from "rxjs/index";
import UserModel from "../../common/models/user/user-model";
import {Store} from "@ngrx/store";
import * as userActions from "../../state/user-edit/user-edit-actions";
import {IUserEditState} from "../../state/user-edit/user-edit";

@Component({
  selector: 'aw3-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {
  public user: UserModel;
  public initialUser: UserModel;
  public userForm: FormGroup;
  public userSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private userModelFactory: UserModelFactory,
    private store: Store<IUserEditState>
  ) {}

  public createForm(): void {
    const uid = this.route.snapshot.params.id;

    this.userSub = this.userService.getUserQueryAngularFirestoreCollection(uid).valueChanges().subscribe((users) => {
      this.user = this.userModelFactory.create(users[0]);
      this.initialUser = this.user;

      this.store.dispatch(new userActions.UserEditActionDiff({
        initialData: this.initialUser,
        currentData: null
      }));

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

      this.onChanges();
    });
  }

  public onSubmit(): any {
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

  onChanges() {
    this.userForm.valueChanges.subscribe((userFormData) => {
      const userData = {
        id: userFormData.id,
        name: userFormData.name,
        username: userFormData.username,
        email: userFormData.email,
        addressStreet: userFormData.addressStreet,
        addressCity: userFormData.addressCity,
        phone: userFormData.phone,
        website: userFormData.website,
        companyStreet: userFormData.companyStreet,
        companyName: userFormData.companyName
      };
      this.user = this.userModelFactory.create(userData);

      this.store.dispatch(new userActions.UserEditActionDiff({
        initialData: this.initialUser,
        currentData: this.user
      }));
    });
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
