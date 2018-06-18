import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'rewards',
        loadChildren: './pages/rewards/rewards.module#RewardsModule'
    }

];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
