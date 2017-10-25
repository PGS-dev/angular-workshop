import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/retry';

// Model
import { User } from './../../models/users.model';

// Services
import { ApiService } from './../../services/api/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<User>;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this
      .apiService
      .getUsers()
      .retry(3)
      .subscribe(
        (data: Array<User>) => {
          this.users = data;
        },
        (error: HttpErrorResponse) => {
          if (error.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
          }
        }
      );

      console.log(this.apiService.getData());
  }
}

