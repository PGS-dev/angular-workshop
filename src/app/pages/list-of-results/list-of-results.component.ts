import { Component, OnInit } from '@angular/core';

// Services
 import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-list-of-results',
  templateUrl: './list-of-results.component.html',
  styleUrls: ['./list-of-results.component.scss']
})
export class ListOfResultsComponent implements OnInit {

  results: any;

  constructor(
    private resultsService: ResultsService
  ) {
    resultsService.items.subscribe( (data) => {
      console.log(data);
      this.results = data;
    });
  }

  ngOnInit() {

  }

  addResult() {
    const result = {
      name: 'Kowalski',
      js: 50,
      html: 50,
      css: 50,
      angularjs: 50,
      dupa: 20
    };
    this.resultsService.addResult(result);
  }

}
