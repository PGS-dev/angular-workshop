import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../services/types';
import { MaterialModule } from '../../all-material.module';

//services
import { UsersService } from '../../services/users/users.service';
import { AuthGuardService } from '../../services/auth-guard/auth-guard.service';

//firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    private p: Number; // for pagination
    public searchPhase: string; // update by child searcher
    public caseSensitiveOption: boolean = false; // passed variable to child searcher - driven by checkbox
    public dynamicUsers: UserModel[] = [];
    public dynamicUsersFirebase: FirebaseListObservable <any[]>;
    public searchFilterString: string;

    private changeCaseS(): void {}

    constructor(private usersService:UsersService, authGuardService:AuthGuardService) {
        this.usersService.searchStream$.subscribe(
            userCriteria => {
              //console.log('przekaz udany!', userCriteria);
              this.searchFilterString = userCriteria;
            });
    }

    ngOnInit() {
      this.dynamicUsers = this.usersService.geUsers();
      this.dynamicUsersFirebase = this.usersService.geUsersFirebase(); //change on resolver ?
    }

    onSearch(phase: string) {
      this.searchPhase = phase;
    }

}
