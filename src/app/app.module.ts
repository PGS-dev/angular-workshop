import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Main component
import { AppComponent } from './app.component';

// Pages
import { UserComponent } from './pages/user/user.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// AngularMaterial
import { MaterialModule } from './materialModule/material.module';

// Services
import { ApiService } from './services/api/api.service';
import { AuthGuardService } from './services/authGuard/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    ApiService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
