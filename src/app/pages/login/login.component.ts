import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray  } from '@angular/forms';
import { MaterialModule } from '../../all-material.module';
import { Router } from '@angular/router';

// services
import { LoginService } from '../../services/login/login.service';

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
    config = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name'
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option'
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

    // reactiveForm
    firebaseForm: FormGroup;
    items = null;
    firebaseMode: boolean;

    getErrorMessage(type: string) {
        if (type === 'email') {
            return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
        }
        return this.password.hasError('required') ? 'You must enter a value' : '';
    }

    constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) {}

    ngOnInit() {
      this.firebaseForm = this.formBuilder.group({
        items: this.formBuilder.array([  ]) // this.createItem()
      });
      // console.log('form', this.form);
    }

    createItem(): FormGroup {
      return this.formBuilder.group({
        name: '',
        description: ''
      });
    }

    addItem(): void {
      this.items = this.firebaseForm.get('items') as FormArray;
      this.items.push(this.createItem());
    }

    changeFormType(): void {
      if (this.firebaseMode) {
        this.addItem();
      } else {
        this.firebaseForm = this.formBuilder.group({
          items: this.formBuilder.array([])
        });
      }
    }

    logUser() {
        if ( this.email.valid && this.password.valid ) {
            this.loginService.setLoginState(this.emailModel, this.passwordModel).subscribe(data => {
                if (data) {
                    this.showError = false;
                    this.router.navigate(['/users']);
                } else {
                    this.showError = true;
                }
            });
        } else {
            this.showError = true;
        }
    }
}
