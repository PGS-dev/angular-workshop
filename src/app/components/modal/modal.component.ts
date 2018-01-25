import { Component, OnInit } from '@angular/core';

// Bootstrap
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

// Models
import { Result } from '../../models/result';

// Service
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public result: Result;

  constructor (
    public activeModal: NgbActiveModal,
    public resultsService: ResultsService
  ) { }

  ngOnInit() {
    this.result = new Result();
  }

  addResult() {
    this.resultsService.addResult(this.result);
  }

}
