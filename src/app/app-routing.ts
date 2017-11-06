import { Routes } from '@angular/router';
import {UsersComponent} from './pages/users/users.component';
import {UserComponent} from './pages/user/user.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginAreaComponent} from "./pages/login-area/login-area.component";
import {AuthorizedLayoutComponent} from "./layouts/authorized-layout/authorized-layout.component";
import {UnauthorizedLayoutComponent} from "./layouts/unauthorized-layout/unauthorized-layout.component";
import {AuthGuard} from "./core/auth-guard";


export const routes: Routes = [
    { path: '', component: AuthorizedLayoutComponent, canActivate: [AuthGuard], children: [
        { path: '', component: DashboardComponent },
        { path: 'users', component: UsersComponent },
        { path: 'user/:id', component: UserComponent },
    ]},
    { path: '', component: UnauthorizedLayoutComponent, children: [
        { path: 'login', component: LoginAreaComponent }
    ] },
    { path: '**', redirectTo: '' }
];
