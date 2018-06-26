import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import UserModel from "../../common/models/user/user-model";
import {RxjsService} from "../../playground/rxjs.service";
import UserModelFactory from "../../common/models/user/user-model.factory";

@Component({
  selector: 'aw3-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user: UserModel;

  constructor(
    private route: ActivatedRoute,
    // private rxjs: RxjsService,
    private userModelFactory: UserModelFactory
  ) {}

  ngOnInit() {
    this.user = this.userModelFactory.create(this.route.snapshot.data.user);

    // this.RxjsService.simpleObservable().subscribe(val => console.log(val));
    // this.RxjsService.simpleObservable2(2).subscribe(val => console.log(val));
    //
    //
    // this.RxjsService.onInputChange().subscribe((val) => console.log(val));
    // this.RxjsService.onEmailCorrect().subscribe((val) => console.log(val));
    //
    // this.RxjsService.fromRange().subscribe(val => console.log(val));
    //
    // this.RxjsService.observableChain().subscribe(val => console.log(val));
    // this.RxjsService.observableChain().next(2);
    // this.RxjsService.observableChain().next(3);
    //
    // this.RxjsService.asyncChain().subscribe(val => {
    //   console.log('Xobs3:', val);
    // }, () => {
    //   console.error(3);
    // }, () => {
    //   console.log('Complete');
    // });
  }
}
