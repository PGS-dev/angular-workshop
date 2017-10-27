import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { MaterialModule } from '../../all-material.module';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})

export class SearcherComponent implements OnInit {
    userFilter: string;
    txtQueryChanged: Subject<string> = new Subject<string>();
    @Input() caseSensitiveOption: boolean; //jak to nasluchiwac?
    @Output() onSearch = new EventEmitter<string>();

    constructor(private usersService:UsersService) {
        this.txtQueryChanged
            .debounceTime(2000) // wait 2 sec after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(model => {
                this.caseSensitiveOption ? this.userFilter = model.toLowerCase() : this.userFilter = model;
                this.usersService.searchUsers(this.userFilter);
                this.onSearch.emit(this.userFilter);
             });
    }

    ngOnInit() {
      //this.usersService.searchUsers('Zbysiu');
    }

    ngOnChanges(changes) {
        //console.log('changes', changes);
        if (changes.caseSensitiveOption.currentValue === true && this.userFilter) {
            this.userFilter = this.userFilter.toLowerCase();
        }
    }

    private searchModelChange = function(newValue: string) {
        this.txtQueryChanged.next(newValue);
    }
}
