import { Component, OnInit } from '@angular/core';

// 3th part library
// import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-rewards',
    templateUrl: './rewards.component.html',
    styleUrls: ['./rewards.component.scss']
})

export class RewardsComponent implements OnInit {

    public rewards: any;

    constructor(
        // private translate: TranslateService
    ) {}

    ngOnInit() {
    }

    onSearch(data: any): void {
        this.rewards = data;
    }
}
