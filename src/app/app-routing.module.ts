import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: '**', redirectTo: '/users' },
  { path: 'user/:id', component: UserComponent},
  { path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
