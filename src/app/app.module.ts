import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {routes} from './app-routing';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PagesModule} from './pages/pages.module';
import {HttpService} from './services/http.service';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material';
import { UnauthorizedLayoutComponent } from './layouts/unauthorized-layout/unauthorized-layout.component';
import { AuthorizedLayoutComponent } from './layouts/authorized-layout/authorized-layout.component';
import {AuthGuard} from './core/auth-guard';
import {AuthService} from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        UnauthorizedLayoutComponent,
        AuthorizedLayoutComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        PagesModule,
        HttpModule,
        MatGridListModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        HttpService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
