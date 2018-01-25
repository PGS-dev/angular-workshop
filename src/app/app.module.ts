import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ListOfResultsComponent } from './pages/list-of-results/list-of-results.component';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { ModalComponent } from './components/modal/modal.component';

// Services
import { AuthenticationService } from './services/authentication.service';
import { ResultsService } from './services/results.service';

// Resolvers
import {LoginResolve } from './pages/login/login.resolve';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListOfResultsComponent,
    PageNotFoundComponent,
    ResultCardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    ModalComponent // for modal
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    ResultsService,
    LoginResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
