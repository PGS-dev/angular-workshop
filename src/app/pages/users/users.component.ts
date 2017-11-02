import { Component, OnInit } from '@angular/core';

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
    public dynamicUsers = [];
    public dynamicUsersFirebase: FirebaseListObservable <any[]>;
    public searchFilterString: string;

    changeCaseS() {
        console.log('CS option change');
    }

    constructor(private usersService:UsersService, authGuardService:AuthGuardService) {
        //this.items.subscribe(console.log); //dana asynchroniczna! - petla bedzie pusta, chyba ze zastosujemy preserveSnapshot
        this.usersService.searchStream$.subscribe(
            userCriteria => {
              console.log('przekaz udany!', userCriteria);
              this.searchFilterString = userCriteria;
            });
    }

    ngOnInit() {
      this.dynamicUsers = this.usersService.geUsers();
      this.dynamicUsersFirebase = this.usersService.geUsersFirebase();
    }

    onSearch(phase: string) {
      this.searchPhase = phase;
    }

}
