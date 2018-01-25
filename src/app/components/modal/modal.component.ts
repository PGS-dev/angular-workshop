import { Component, OnInit, Input } from '@angular/core';

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

  @Input() inputResult: Result;
  @Input() typeOfModal: string;

  public result: Result;

  constructor (
    public activeModal: NgbActiveModal,
    public resultsService: ResultsService
  ) { }

  ngOnInit() {
    if (this.typeOfModal === 'add') {
      this.result = new Result();
    }else {
      this.result = this.inputResult;
    }

  }

  onSubmit() {
    if (this.typeOfModal === 'add') {
      this.addResult();
    }else {
      this.editResult();
    }

  }

  addResult() {
    this.resultsService.addResult(this.result);
  }
  editResult() {
    this.resultsService.updateResult(this.result.key, this.result);
  }

  delete() {
    this.resultsService.removeResult(this.result.key);
  }

}
