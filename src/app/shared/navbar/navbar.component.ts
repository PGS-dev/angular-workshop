import { Component, OnInit } from '@angular/core';


// 3th part library
// import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(
        // private translate: TranslateService
    ) {
        // translate.setDefaultLang('en-gb');
        // translate.use('en-gb');
    }

    ngOnInit() {

    }
    changeLangToNL(): void {
        // this.translate.use('nl');
    }

    changeLangToEN(): void {
        // this.translate.use('en-gb');
    }

}
