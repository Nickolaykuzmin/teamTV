import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import {MainComponent} from "./main/main.component";
import {TvRecommendDatailsComponent} from './tv-recommends/tv-recommend-datails/tv-recommend-datails.component';
//
// <div class="container">
// <h2 class="mb-3 mt-3">TV Maze Reccomends</h2>
// <app-tv-recommends class="tv-records"></app-tv-recommends>
//   </div>

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
    component: TvRecommendDatailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
