import {Component, OnInit} from '@angular/core';
import {UserService, UserDetailsInterface} from '../../services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    userList: UserDetailsInterface[] = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
        const that = this;
        that.renderList();
    }

    renderList() {
        const that = this;
        that.userService.getList().subscribe((responseData) => {
            that.userList = responseData;
        });
    }

    searchAndRenderList(keyword: string) {
        const that = this;
        that.userService.getList(keyword).subscribe((responseData) => {
            that.userList = responseData;
        });
    }

}

