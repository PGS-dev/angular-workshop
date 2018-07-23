import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   redirectTo: ''
  // },
  {
    path: 'users',
    loadChildren: 'src/app/pages/users/users.module#UsersModule'
  },
  {
    path: 'users/user/:id',
    loadChildren: 'src/app/pages/user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
