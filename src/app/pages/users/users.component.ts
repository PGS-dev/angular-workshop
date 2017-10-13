import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../all-material.module';
import { UsersService } from '../../services/users.service';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'; //AngularFireList v5
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

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
    user: Observable<firebase.User>;
    items: FirebaseListObservable<any[]>; //AngularFireList v5
    msgVal: string = ''

  constructor(private usersService:UsersService, public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
      this.items = af.list('users', {
      query: {
        limitToLast: 50
      }
    });

    //this.items.subscribe(console.log); //dana asynchroniczna! - petla bedzie pusta, chyba ze zastosujemy preserveSnapshot

    //list all users
    af.list('users', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          console.log(snapshot.key, snapshot.val());
        });
    })

    this.user = this.afAuth.authState;
  }
  ngOnInit() {
      console.log(this.usersService.geUsers());
      this.dynamicUsers = this.usersService.geUsers();
  }

}
