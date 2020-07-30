import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '',
    component: SignInComponent,

  },
  {
    path: '',
    component: SignUpComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
