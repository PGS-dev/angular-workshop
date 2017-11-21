import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersResolver } from './../users/users.resolve';

const USERS_ROUTER: Routes = [
    {
        resolve: {
            users: UsersResolver
        },
        path: 'users',
        component: UsersComponent
    }
];

export const usersRouter = RouterModule.forChild(USERS_ROUTER);
