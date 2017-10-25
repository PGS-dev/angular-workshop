import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';


const USERS_ROUTER: Routes = [
    {
        path: '',
        component: UsersComponent
    }
]

export const usersRouter = RouterModule.forChild(USERS_ROUTER);