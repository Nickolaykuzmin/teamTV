import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import {MainComponent} from "./main/main.component";
import { TvRecommendDatailsComponent } from './tv-recommends/tv-recommend-datails/tv-recommend-datails.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AngularFireAuthGuard],

  },
  {
    path:'details',
    component:TvRecommendDatailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
