import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {

    @Input() keyword: string;
    @Output() changeTriggered = new EventEmitter<string>();

    constructor() {

    }

    setKeyword() {
        const that = this;
        that.changeTriggered.emit(that.keyword);
    }

}
