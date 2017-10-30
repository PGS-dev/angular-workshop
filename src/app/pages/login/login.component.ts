import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MaterialModule } from '../../all-material.module';

//services
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    emailModel:string;
    passwordModel:string;
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);

    getErrorMessage(type:string) {
        if (type === 'email') {
            return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
        }
        return this.password.hasError('required') ? 'You must enter a value' : '';
    }

    constructor(private authGuardService:AuthGuardService) {}

    ngOnInit() {}

    logUser() { console.log(this.emailModel, this.passwordModel);
      this.authGuardService.emailLogin(this.emailModel,this.passwordModel);
    }

}
