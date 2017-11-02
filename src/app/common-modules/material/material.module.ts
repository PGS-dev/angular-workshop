import {NgModule} from '@angular/core';
import {
    NoConflictStyleCompatibilityMode,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule
} from '@angular/material';

@NgModule({
    imports: [
        NoConflictStyleCompatibilityMode,
        MatCheckboxModule,
        MatTableModule,
        MatFormFieldModule
    ],
    exports: [
        MatCheckboxModule,
        MatTableModule,
        MatFormFieldModule
    ]
})
export class MaterialModule {
}
