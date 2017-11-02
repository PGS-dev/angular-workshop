import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {UsersService} from '../../services/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    public dataSource: UsersDataSource | null;
    public displayedColumns = ['name', 'phone', 'email'];

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.dataSource = new UsersDataSource(this.usersService);
    }
}

export class UsersDataSource extends DataSource<any> {
    constructor(private usersService: UsersService) {
        super();
    }

    connect(): Observable<any> {
        return this.usersService.getUsers();
    }

    disconnect() {
    }
}
