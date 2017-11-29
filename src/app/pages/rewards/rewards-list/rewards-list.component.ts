import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-rewards-list',
    templateUrl: './rewards-list.component.html',
    styleUrls: ['./rewards-list.component.scss']
})
export class RewardsListComponent implements OnInit {
    @Input() rewards: any;
    constructor() { }

    ngOnInit() {
    }

}
