import { Component, OnInit, OnChanges } from '@angular/core';

import { ApiService} from './../../services/api/api.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, OnChanges {

  constructor(private apiService: ApiService) {
    let test = 'test';
   }

  ngOnInit() {
    this.apiService.getUsers();
    this.apiService.set('test');
  }

  ngOnChanges() {
    console.log('test');
  }

}
