import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RewardsService {

    constructor(
        private http: HttpClient
    ) { }

    getRewardsBySearch(text): Observable<any> {
        return this.http
            .get(`https://qa.epoints.com/rest/search/redemptionitems?filters=&keyword=${text}&page=0&pageSize=100&userSearch=true`);
    }
}
