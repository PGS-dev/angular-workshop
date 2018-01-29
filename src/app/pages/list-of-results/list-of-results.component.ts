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
  filterdResult: any;

  constructor(
    private resultsService: ResultsService,
    private modalService: NgbModal
  ) {
    resultsService.results.subscribe((data) => {
      this.results = data;
      this.filterdResult = data;
    });
  }

  ngOnInit() {
  }

  filter(searchTerm: string) {
    searchTerm = searchTerm.toLowerCase();
    if (searchTerm === '') {
      this.filterdResult = this.results;
    }else {
      this.filterdResult = this.resultsService.filterData(this.results, searchTerm);
    }
  }
}
