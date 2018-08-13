import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs/index";
import {UsersModelFactory} from "../../common/models/users/users-model.factory";
import UserModel from "../../common/models/user/user-model";
import {UsersService} from "./users.service";
import {Store} from "@ngrx/store";
import {IAuthState} from "../../state/auth/auth";
import {getAuthSelector} from "../../state/auth/auth.reducer";
import {AuthService} from "../../common/services/auth/auth.service";

@Component({
  selector: 'aw3-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy { // Describe your class with OnDestroy interface.
  public users: UserModel[] | null;
  public sub: Subscription;
  public isAuthenticated: boolean;
  public usersDisplayedColumns: string[] = [
    'name', 'username', 'email', 'website'
  ];

  constructor(
    private authService: AuthService,
    private usersModelFactory: UsersModelFactory,
    private usersService: UsersService,
    private store: Store<IAuthState>
  ) {}

  ngOnInit() {
    // When invoking isLogged method initial auth state is saved.
    this.authService.isLogged().subscribe();

    this.store.select(getAuthSelector).subscribe((authState) => {
      this.isAuthenticated = authState.authenticated;

      if (this.isAuthenticated) {
        this.sub = this.usersService.getUsersAngularFirestoreCollection().valueChanges().subscribe((users) => {
          const userModel = this.usersModelFactory.create(users);

          this.users = userModel.getUsers();
        });

        // this.usersService.getMockUsersJSONFromAssets().then((users) => {
        //   users.json().then((users) => {
        //     this.users = this.usersModelFactory.create(users).getUsers();
        //   });
        // });
      } else {
        this.users = null;
      }
    });
  }

  ngOnDestroy() { // Unsubscribe on every component destroy event.
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
