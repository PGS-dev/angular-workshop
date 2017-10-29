import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { UsersComponent } from '../../pages/users/users.component';
import { UserComponent } from '../../pages/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'users', loadChildren: '../../pages/users/users.module#UsersModule' },
  { path: 'user/:id', loadChildren: '../../pages/user/user.module#UserModule' },
  { path: '**', redirectTo: '/users' }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
