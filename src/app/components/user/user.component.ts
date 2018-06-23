import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import UserModel from "../../common/models/user/user-model";
import {RxjsService} from "../../playground/rxjs.service";

@Component({
  selector: 'aw3-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user: UserModel;

  constructor(
    private route: ActivatedRoute,
    private RxjsService: RxjsService
  ) {
    this.user = new UserModel(this.route.snapshot.data.user);
  }

  ngOnInit() {
    this.RxjsService.simpleObservable().subscribe(val => console.log(val));
    this.RxjsService.simpleObservable2(2).subscribe(val => console.log(val);


    this.RxjsService.onInputChange().subscribe((val) => console.log(val));
    this.RxjsService.onEmailCorrect().subscribe((val) => console.log(val));

    this.RxjsService.fromRange().subscribe(val => console.log(val));

    this.RxjsService.observableChain().subscribe(val => console.log(val));
    this.RxjsService.observableChain().next(2);
    this.RxjsService.observableChain().next(3);

    this.RxjsService.asyncChain().subscribe(val => {
      console.log('Xobs3:', val);
    }, () => {
      console.error(3);
    }, () => {
      console.log('Complete');
    });
  }
}
