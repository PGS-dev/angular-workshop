import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../all-material.module';
import { UsersService } from '../../services/users.service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

/*    tiles = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];*/

    dynamicUsers = [];
    dynamicUsersFirebase: FirebaseListObservable<any[]>;

  constructor(private usersService:UsersService) {

    //this.items.subscribe(console.log); //dana asynchroniczna! - petla bedzie pusta, chyba ze zastosujemy preserveSnapshot
  }
  ngOnInit() {
      this.dynamicUsers = this.usersService.geUsers();
      this.dynamicUsersFirebase = this.usersService.geUsersFirebase();
  }

}
