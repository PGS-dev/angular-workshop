import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NavbarComponent } from './navbar/navbar.component';

// 3th part library
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent
  ]
})
export class SharedModule { }
