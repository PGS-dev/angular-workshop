import { Component } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	constructor() { }

	onInputChange(val: string) {
		console.log('login ' + val);
	}

}
