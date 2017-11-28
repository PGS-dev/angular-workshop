import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'home',
  template: `<h3>{{ data }}</h3>`
})
export class HomeComponent implements OnInit {
  public data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://qa.epoints.com/rest/search/redemptionitems?filters=s_categoryFromFeedExtractedSeoSlugs_multiVal:halloween,s_departmentSeoSlug:specials&page=1&pageSize=5').subscribe(data => {
      // Read the result field from the JSON response.
      this.data = data['pagesCount'];
    });
  }
}