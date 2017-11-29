import { Routes, RouterModule } from '@angular/router';
import { RewardsComponent } from './rewards.component';

const REWARDS_ROUTER: Routes = [
    {
        path: '',
        component: RewardsComponent
    }
];

export const RewardsRouter = RouterModule.forChild(REWARDS_ROUTER);
