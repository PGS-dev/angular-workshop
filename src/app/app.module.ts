import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {routes} from './app-routing';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PagesModule} from './pages/pages.module';
import {HttpService} from './services/http.service';
import {Http, HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent
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
        HttpService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
