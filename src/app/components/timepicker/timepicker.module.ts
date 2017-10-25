import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimepickerComponent} from './timepicker.component';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule} from '@angular/material';
@NgModule({
    imports: [
        CommonModule,

        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    declarations: [
        TimepickerComponent
    ],
    exports: [
        TimepickerComponent,
        MatDatepickerModule
    ]
})
export class TimepickerModule {
}
