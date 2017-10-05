import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [  
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LogoComponent
  ],
  declarations: [HeaderComponent, LogoComponent]
})
export class ComponentsModule { }
