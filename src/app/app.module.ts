import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';


// Routing
import { AppRoutingModule } from './app.routing.module';

// Components
import { AppComponent } from './app.component';

// Shared
import { SharedModule } from './shared/shared.module';

// Services
import { RewardsService } from './services/rewards/rewards.service';

//3th part library
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Service Worker

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Configure path to translates
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, '/api/rest/configuration/locale/translations.', '.json');
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
    // TranslateModule.forRoot({
    //   loader: {
    //       provide: TranslateLoader,
    //       useFactory: (createTranslateLoader),
    //       deps: [HttpClient]
    //   }
    // })
  ],
  providers: [RewardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
