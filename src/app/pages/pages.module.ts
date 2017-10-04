import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

@NgModule({
  imports: [
    CommonModule, HomeModule, AboutModule
  ],
  exports: [ 
    HomeModule, AboutModule 
  ],
  declarations: []
})
export class PagesModule { }
