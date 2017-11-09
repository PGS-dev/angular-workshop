import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';

// services
import { LoginService } from '../../services/login/login.service';

@Component({
    selector: 'app-login-switch',
    templateUrl: './login-switch.component.html',
    styleUrls: ['./login-switch.component.scss']
})
export class LoginSwitchComponent implements OnInit, OnDestroy  {
    constructor(private loginService: LoginService) { }
    public userStatus: boolean = null;
    private subscription: ISubscription;

    logOut(event): void {
        event.preventDefault();
        this.loginService.setLoginState('', '').subscribe (
            (data: boolean) => {
                this.userStatus = data;
        });
    }

    ngOnInit() {
        this.subscription = this.loginService.authenticated.subscribe (
            (value: boolean) => {
                this.userStatus = value;
            });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
  }
}
