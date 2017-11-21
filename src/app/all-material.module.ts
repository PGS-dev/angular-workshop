import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, MatFormFieldModule, MatInputModule,
  MatTableModule, MatPaginatorModule  // required for table
  } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule],
})
export class MaterialModule { }
