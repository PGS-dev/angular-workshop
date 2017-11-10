import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

// Resolvers
import { UsersResolver } from './../users/users.resolve';
const USERS_ROUTER: Routes = [
    {
        resolve: {
            appVersionResolver: UsersResolver
        },
        path: '',
        component: UsersComponent
    }
];

export const usersRouter = RouterModule.forChild(USERS_ROUTER);
