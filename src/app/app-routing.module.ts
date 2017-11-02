import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
//import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';

//services
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
		path: 'users/',
		loadChildren: './pages/users/users.module#UsersModule'
	},
    {
        canActivate: [AuthGuardService],
        path: 'user/:id',
        component: UserComponent
    },
    {
        path: '',
        redirectTo: 'users/',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'users/'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
