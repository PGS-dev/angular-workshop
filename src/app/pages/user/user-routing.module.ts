import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './user.component';
import {AuthGuardService} from "../../common/services/auth-guard/auth-guard.service";
import {UserCreateComponent} from "../user-create/user-create.component";
import {UserEditComponent} from "../user-edit/user-edit.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'create',
    component: UserCreateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'edit',
    component: UserEditComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
