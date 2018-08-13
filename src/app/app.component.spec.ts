import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {LoginComponent} from "./components/login/login.component";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {MenuComponent} from "./components/menu/menu.component";
import {ButtonComponent} from "./components/button/button.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {ServiceWorkerModule} from "@angular/service-worker";
import {StoreModule} from "@ngrx/store";
import {MatToolbarModule} from "@angular/material";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        ServiceWorkerModule,
        StoreModule.forRoot({}),
        MatToolbarModule
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        MenuComponent,
        ButtonComponent,
        LoaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`should have as title 'aw3'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.title).toEqual('aw3');
  });
});
