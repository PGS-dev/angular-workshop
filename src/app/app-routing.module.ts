import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
    { path: 'users/', component: UsersComponent },
    { path: 'user/:id', component: UserComponent },
    {
        path: '',
        redirectTo: 'users/',
        pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: 'users/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
