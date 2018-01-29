import { Component, Input } from '@angular/core';

// Models
import { Result } from '../../models/result';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent {

  constructor() { }

  @Input() result: Result;
}
