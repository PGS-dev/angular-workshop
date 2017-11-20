import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
  {path: 'users', loadChildren: './pages/users/users.module#UsersModule'},
  {path: 'users/:id', loadChildren: './pages/user/user.module#UserModule'},
  {path: 'error', loadChildren: './pages/error/error.module#ErrorModule'},
  {path: '**', redirectTo: 'error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
