import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Services

import { AuthGuardService } from './services/authGuard/auth-guard.service';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: './pages/users/users.module#UsersModule'
  },
  {
    canActivate: [AuthGuardService],
    path: 'user',
    component: UserComponent
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
