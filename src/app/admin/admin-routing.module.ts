import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import {MainComponent} from "./main/main.component";
import {TvRecommendDetailsComponent} from './tv-recommends/tv-recommend-details/tv-recommend-details.component';
import { ShowsComponent } from './shows/shows.component';
import { TvRecommendsComponent } from './tv-recommends/tv-recommends/tv-recommends.component';

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
    children: [
      {
        path: 'shows',
        component: ShowsComponent
      },
      {
        path: 'recommends',
        component: TvRecommendsComponent
      },
      {
        path: 'recommends/:id',
        component: TvRecommendDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
