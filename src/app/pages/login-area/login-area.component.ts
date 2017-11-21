import {Component, OnInit} from '@angular/core';
import {AuthData, AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login-area',
    templateUrl: './login-area.component.html',
    styleUrls: ['./login-area.component.scss']
})

export class LoginAreaComponent implements OnInit {

    formData: AuthData = new AuthData('', '');
    formLogin: FormGroup;

    constructor(private authService: AuthService,
                private router: Router,
                private formBuilder: FormBuilder) {
        this.createReactForm();
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

    createReactForm() {
        const that = this;
        that.formLogin = that.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.minLength(4)]
        });
    }

    doSubmitReact() {
        const that = this;

        const isLoggedIn = that.authService.doLogin(that.formLogin.value);
        if (isLoggedIn) {
            that.router.navigate(['']);
        }
    }

}
