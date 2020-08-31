import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {MainComponent} from './main/main.component';
import {TvRecommendsModule} from "./tv-recommends/tv-recommends/tv-recommends.module";
import { HeaderComponent } from './header/header.component';
import { TvRecommendDetailsModule } from './tv-recommends/tv-recommend-details/tv-recommend-details.module';
import { ShowsModule } from './shows/shows.module';
import { ClassDirective } from './class.directive';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ClassDirective
  ],
  exports: [
    ClassDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TvRecommendsModule,
    ShowsModule
  ]
})
export class AdminModule { }
