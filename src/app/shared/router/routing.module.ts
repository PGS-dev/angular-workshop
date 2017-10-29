import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { UsersComponent } from '../../pages/users/users.component';
import { UserComponent } from '../../pages/user/user.component';
import { LoginComponent } from '../../pages/login/login.component';
import { AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'users', loadChildren: '../../pages/users/users.module#UsersModule', canActivate: [AuthGuard] },
  { path: 'user/:id', loadChildren: '../../pages/user/user.module#UserModule', canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
