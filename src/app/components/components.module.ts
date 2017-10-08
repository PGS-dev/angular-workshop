import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
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
