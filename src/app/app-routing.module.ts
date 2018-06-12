import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './pages/users/users.component';

import { UserComponent } from "./components/user/user.component";
import { UserResolver } from "./components/user/user.resolver";
import { UsersResolver } from "./pages/users/users.resolver";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    resolve: {
      users: UsersResolver
    }
  },
  {
    path: 'users/user/:id',
    component: UserComponent,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserResolver, UsersResolver]
})
export class AppRoutingModule { }
