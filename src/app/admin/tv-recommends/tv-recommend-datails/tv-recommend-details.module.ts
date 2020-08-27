import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvRecommendDatailsComponent } from "./tv-recommend-datails.component";
import { VideosService } from "../../../core/services/videos.service";



@NgModule({
  declarations: [
    TvRecommendDatailsComponent
  ],
  providers: [
    VideosService
  ],
  imports: [
    CommonModule
  ],
  exports: [TvRecommendDatailsComponent]
})
export class TvRecommendDetailsModule { }
