import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserDetailsInterface} from "../../services/user.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    userData: UserDetailsInterface;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        const that = this;
        that.userData = that.route.snapshot.data.user;
    }

}
