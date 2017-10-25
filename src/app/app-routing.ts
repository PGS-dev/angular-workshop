import { Routes } from '@angular/router';
import {UsersComponent} from './pages/users/users.component';
import {UserComponent} from './pages/user/user.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'user/:id', component: UserComponent },
    { path: '**', redirectTo: '' }
];
