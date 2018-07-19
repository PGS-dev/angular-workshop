import {NgModule} from "@angular/core";
import {ButtonComponent} from "./button.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule {}
