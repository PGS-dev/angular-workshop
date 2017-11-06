import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-authorized-layout',
    templateUrl: './authorized-layout.component.html',
    styleUrls: ['./authorized-layout.component.scss']
})
export class AuthorizedLayoutComponent implements OnInit {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
    }

    doLogoutUser() {
        const that = this;
        that.authService.doLogout();
        that.router.navigate(['/login']);
    }

}
