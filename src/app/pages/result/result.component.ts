import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

// Models
import { Result } from '../../models/result';

// Services
import { ResultsService } from '../../services/results.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private resultsService: ResultsService,
    private formBuilder: FormBuilder
  ) {}

  resultForm: FormGroup;
  result: Result;
  idOfResult: string;

  ngOnInit() {
    this.result = this.activatedRoute.snapshot.data['result'];
    this.idOfResult = this.activatedRoute.snapshot.paramMap.get('id');
    this.createForm();
  }

  createForm() {
    this.resultForm = this.formBuilder.group({
      name: [this.result.name, Validators.required],
      lastName: [this.result.lastName, Validators.required],
      html: [this.result.html, Validators.compose([
        Validators.maxLength(3),
        Validators.pattern(/^\d+$/)
      ])],
      js: [this.result.js, Validators.compose([
        Validators.maxLength(3),
        Validators.pattern(/^\d+$/)
      ])],
      css: [this.result.css, Validators.compose([
        Validators.maxLength(3),
        Validators.pattern(/^\d+$/)
      ])],
      angularJs: [this.result.angularjs, Validators.compose([
        Validators.maxLength(3),
        Validators.pattern(/^\d+$/)
      ])],
    });
  }

  onSubmit() {
    this.editResult();
  }

  editResult() {
    this.resultsService.updateResult(this.idOfResult, this.result);
  }

  delete() {
    this.resultsService.removeResult(this.idOfResult);
  }

}
