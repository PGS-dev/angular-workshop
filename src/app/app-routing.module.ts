import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './pages/users/users.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { 
    canActivate: [AuthGuardService],
    path: 'user/:id', 
    component: UserDetailsComponent
  },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: '**', redirectTo: '/users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
