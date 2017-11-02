import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MaterialModule } from '../../all-material.module';
import { Router } from "@angular/router";

//services
import { LoginService } from '../../services/login/login.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private emailModel: string;
    private passwordModel: string;

    private email = new FormControl('', [Validators.required, Validators.email]);
    private password = new FormControl('', [Validators.required]);
    private showError: boolean = false;

    getErrorMessage(type: string) {
        if (type === 'email') {
            return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
        }
        return this.password.hasError('required') ? 'You must enter a value' : '';
    }

    constructor(private loginService:LoginService, private router:Router) {}

    ngOnInit() {}

    logUser() {
        if ( this.email.valid && this.password.valid ) {
            this.loginService.setLoginState(this.emailModel, this.passwordModel).subscribe(data => {
                if (data) {
                    this.showError = false;
                    this.router.navigate(['./']);
                }
                else {
                    this.showError = true;
                }
            });
        }
        else {
            this.showError = true;
        }
    }
}
