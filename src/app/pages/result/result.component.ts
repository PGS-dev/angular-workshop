import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// Models
import { Result } from '../../models/result';

// Services
import { ResultsService } from '../../services/results.service';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  result: Result;

  constructor(
    private activatedRoute: ActivatedRoute,
    private resultsService: ResultsService
  ) { }

  ngOnInit() {
    this.result = this.activatedRoute.snapshot.data['result'];
  }

  onSubmit() {
    this.editResult();
  }

  editResult() {
    this.resultsService.updateResult(this.activatedRoute.snapshot.paramMap.get('id'), this.result);
  }

  delete() {
    this.resultsService.removeResult(this.result.key);
  }

}
