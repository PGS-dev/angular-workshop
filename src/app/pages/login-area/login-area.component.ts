import {Component, OnInit} from '@angular/core';
import {AuthData, AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-area',
    templateUrl: './login-area.component.html',
    styleUrls: ['./login-area.component.scss']
})

export class LoginAreaComponent implements OnInit {

    formData: AuthData = new AuthData('', '');

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {

    }

    doSubmit() {
        const that = this;

        const isLoggedIn = that.authService.doLogin(that.formData);
        if (isLoggedIn) {
            that.router.navigate(['']);
        }
    }

}
