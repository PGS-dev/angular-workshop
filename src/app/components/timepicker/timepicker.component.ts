import {Component, OnInit} from '@angular/core';
import {MatDatepickerIntl} from '@angular/material';

@Component({
    selector: 'app-timepicker',
    templateUrl: './timepicker.component.html',
    styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {

    startDate;
    constructor() {
    }

    ngOnInit() {
    }

}
