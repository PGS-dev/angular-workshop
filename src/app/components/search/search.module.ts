import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import {SearchComponent} from './search.component';
import {FormsModule} from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    declarations: [
        SearchComponent
    ],
    exports: [
        SearchComponent
    ]
})
export class SearchModule {
}
