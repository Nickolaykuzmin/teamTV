import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvRecommendDatailsComponent } from "./tv-recommend-datails.component";
import { TvRecommendsService } from "../../../core/services/tv-recommends.service";



@NgModule({
  declarations: [
    TvRecommendDatailsComponent
  ],
  providers: [
    TvRecommendsService
  ],
  imports: [
    CommonModule
  ],
  exports: [TvRecommendDatailsComponent]
})
export class TvRecommendDetailsModule { }
