import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// Services
import { RewardsService } from '../../services/rewards/rewards.service';

// 3th part library
// import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    public subjectSearch = new Subject();
    public search: string;
    public rewards: any;

    @Output() onSearch = new EventEmitter<string>();

    constructor(
        private rewardsService: RewardsService
    ) {
        this.subjectSearch
        .subscribe( val => {
            this.rewardsService.getRewardsBySearch(val).subscribe( (data) => {
                this.onSearch.emit(data);
            });
        });
     }

    ngOnInit() {
    }

    valueChanged(): void {
        this.subjectSearch.next(this.search);
    }


}
