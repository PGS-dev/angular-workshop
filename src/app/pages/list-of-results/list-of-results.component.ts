import { Component, OnInit } from '@angular/core';

// Services
import { ResultsService } from '../../services/results.service';

// Components
import { ResultCardComponent } from '../../components/result-card/result-card.component';

// Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Modal
import { ModalComponent } from '../../components/modal/modal.component';

// Models
import { Result } from '../../models/result';

@Component({
  selector: 'app-list-of-results',
  templateUrl: './list-of-results.component.html',
  styleUrls: ['./list-of-results.component.scss']
})
export class ListOfResultsComponent implements OnInit {

  results: any;

  constructor(
    private resultsService: ResultsService,
    private modalService: NgbModal
  ) {
    resultsService.items.subscribe((data) => {
      this.results = data;
    });
  }

  ngOnInit() {
  }
}
