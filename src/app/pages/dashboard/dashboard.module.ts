import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {TimepickerModule} from '../../components/timepicker/timepicker.module';


@NgModule({
    imports: [
        CommonModule,
        TimepickerModule
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {
}
