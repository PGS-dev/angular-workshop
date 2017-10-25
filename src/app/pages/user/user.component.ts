import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    id: string;

    constructor(private route: ActivatedRoute, private router: Router) {
        // this.id = paramMap.get('id');
    }

    ngOnInit() {
    }

}
