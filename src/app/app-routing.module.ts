import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./core/auth/auth.module').then(login => login.AuthModule)
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(admin => admin.AdminModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
