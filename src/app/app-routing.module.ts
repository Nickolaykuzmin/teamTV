import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthGuardService }   from './core/_helpers/auth-guard.service'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/main',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then(login => login.AuthModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(admin => admin.AdminModule),
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuardService]
})
export class AppRoutingModule {
}
