import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfResultsComponent } from './pages/list-of-results/list-of-results.component';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ResultComponent } from './pages/result/result.component';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Resolvers
import { LoginResolve } from './pages/login/login.resolve';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    resolve: {
      state: LoginResolve
    }
  },
  {
   path: 'results',
   component: ListOfResultsComponent,
   canActivate: [AuthGuard]
  },
  {
    path: 'result',
    component: ResultComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
