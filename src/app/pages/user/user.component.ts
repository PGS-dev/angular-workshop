import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import UserModel from "../../common/models/user/user-model";
import {UserModelFactory} from "../../common/models/user/user-model.factory";
import {UserService} from "./user.service";
import {Subscription} from "rxjs/index";
import {take} from "rxjs/internal/operators";

@Component({
  selector: 'aw3-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  public sub: Subscription;
  public user: UserModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userModelFactory: UserModelFactory,
    private userService: UserService
  ) {}

  /**
   * Gets the Firebase Observable from UserService, streams data via valueChanges() method and subscribes to it
   * to get the data, create user instance and apply it to public member user to display information on view.
   */
  ngOnInit() {
    const uid = this.route.snapshot.params.id;

    this.sub = this.userService.getUserQueryAngularFirestoreCollection(uid).valueChanges().pipe(take(1)).subscribe((users) => {
      this.user = this.userModelFactory.create(users[0]);
    });
  }

  public onDelete(): void {
    this.userService.removeUserFromAngularFirestoreCollection(this.user)
      .then((successMessage) => {
        console.log(successMessage);
        this.router.navigate(['/users']);
      })
      .catch((errorMessage) => {
        console.error(errorMessage);
      });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
