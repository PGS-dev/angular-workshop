import {Component, OnInit} from '@angular/core';
import {UserService, UserDetailsInterface} from '../../services/user.service';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    userList: UserDetailsInterface[] = [];

    constructor(private userService: UserService,
                private route: ActivatedRoute) {}

    ngOnInit() {
        const that = this;
        that.userList = that.route.snapshot.data.users;
    }

    searchAndRenderList(keyword: string) {
        const that = this;
        that.userService.getList(keyword).subscribe((responseData) => {
            that.userList = responseData;
        });
    }

}

