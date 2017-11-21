import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserResolver } from './user.resolve';

const USER_ROUTER: Routes = [
    {
        resolve: {
            user: UserResolver
        },
        path: 'user/:id',
        component: UserComponent
    }
];

export const userRouter = RouterModule.forChild(USER_ROUTER);
