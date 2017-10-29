import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const USER_ROUTER: Routes = [
    {
        path: '',
        component: UserComponent
    }
]

export const userRouter = RouterModule.forChild(USER_ROUTER);