import { Component, OnInit, Input } from '@angular/core';

// Bootstrap
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

// Models
import { Result } from '../../models/result';

// Service
import { ResultsService } from '../../services/result/results.service';

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

  onSubmit() {
    this.addResult();
  }

  addResult() {
    this.resultsService.addResult(this.result);
  }

}
