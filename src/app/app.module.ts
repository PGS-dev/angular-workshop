import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './all-material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { UserModule } from './pages/user/user.module';
import { SearcherComponent } from './components/searcher/searcher.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    UserModule,
    //UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
