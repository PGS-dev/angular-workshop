import { Component, OnInit, Input} from '@angular/core';

// Models
import { Result } from '../../models/result';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @Input() result: Result;

  resultToGraph: any;

  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  view: any[] = [600, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  autoScale = false;

  constructor() { }

  ngOnInit() {
    this.resultToGraph = [
      {
        'name': `${this.result.name} ${this.result.lastName}`,
        'series': [
          {
            'name': 'HTML',
            'value': this.result.html
          },
          {
            'name': 'CSS',
            'value': this.result.css
          },
          {
            'name': 'js',
            'value': this.result.js
          },
          {
            'name': 'angularjs',
            'value': this.result.angularjs
          }
        ]
      }
    ];
  }

}
