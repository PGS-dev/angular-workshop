import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ResultComponent } from './pages/result/result.component';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { GraphComponent } from './components/graph/graph.component';

// Services
import { AuthenticationService } from './services/auth/authentication.service';
import { ResultsService } from './services/result/results.service';

// Resolvers
import { LoginResolve } from './pages/login/login.resolve';
import { ResultResolver } from './pages/result/result.resolver';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Pipes
import { UpperCasePipe } from './pipes/upper-case.pipe';

// 3th part library
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListOfResultsComponent,
    PageNotFoundComponent,
    ResultCardComponent,
    ModalComponent,
    GraphComponent,
    ResultComponent,
    UpperCasePipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    NgxChartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ModalComponent // for modal
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    ResultsService,
    LoginResolve,
    ResultResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
