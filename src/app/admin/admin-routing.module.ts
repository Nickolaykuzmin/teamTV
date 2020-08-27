import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import {MainComponent} from "./main/main.component";
import {TvRecommendDetailsComponent} from './tv-recommends/tv-recommend-details/tv-recommend-details.component';

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
    path: 'main/:id',
    component: TvRecommendDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
