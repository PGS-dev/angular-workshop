import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from "./pages/user/user.component";
import { UsersComponent } from './pages/users/users.component';
import { AuthGuardService } from "./common/services/auth-guard/auth-guard.service";
import { UserCreateComponent } from "./pages/user-create/user-create.component";
import { UserEditComponent } from "./pages/user-edit/user-edit.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/user/create',
    component: UserCreateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'users/user/:id',
    component: UserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'users/user/edit/:id',
    component: UserEditComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
