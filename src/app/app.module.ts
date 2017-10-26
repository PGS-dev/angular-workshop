import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './shared/router/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    PagesModule,
    RoutingModule, 
    BrowserAnimationsModule, 
    ComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
