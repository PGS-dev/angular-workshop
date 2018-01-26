import { Component, OnInit, Input } from '@angular/core';

// Models
import { Result } from '../../models/result';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  constructor() { }

  @Input() result: Result;

  ngOnInit() {
    console.log(this.result);
  }
}
