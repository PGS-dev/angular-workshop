import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserModel } from '../../services/types';
import { MaterialModule } from '../../all-material.module';
import { DataSource } from '@angular/cdk/collections'; // for resolver?
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// services
import { UsersService } from '../../services/users/users.service';
import { AuthGuardService } from '../../services/auth-guard/auth-guard.service';

// firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { MatTableDataSource, MatPaginator } from '@angular/material'; // required for table

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

    private p: Number; // for pagination
    public searchPhase: string; // update by child searcher
    public caseSensitiveOption: boolean = false; // passed variable to child searcher - driven by checkbox
    public dynamicUsers: UserModel[] = [];
    public dynamicUsersFirebase: FirebaseListObservable <any[]>;
    public searchFilterString: string;
    public appVersion: string;

    displayedColumns = ['id', 'name', 'technology', 'action'];
    ELEMENT_DATA: Element[] = [];
    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    private changeCaseS(): void {}

    constructor(private usersService: UsersService, private authGuardService: AuthGuardService, private route: ActivatedRoute) {
        this.usersService.searchStream$.subscribe(
            userCriteria => {
              this.searchFilterString = userCriteria;
            });
    }

    ngOnInit() {
      this.dynamicUsers = this.usersService.geUsers();
      this.dynamicUsersFirebase = this.usersService.geUsersFirebase();
      this.dynamicUsersFirebase.subscribe(fronters => {
        fronters.map(res => {
            this.ELEMENT_DATA.push(res);
          });
          this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
        });

      this.appVersion = this.route.snapshot.data['appVersionResolver'];
    }

    ngAfterViewInit() {}

    onSearch(phase: string) {
      this.searchPhase = phase;
    }

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
}

export interface Element {
  id: number;
  name: string;
  technology: string;
}
