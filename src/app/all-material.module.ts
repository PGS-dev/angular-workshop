import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule],
})
export class MaterialModule { }
