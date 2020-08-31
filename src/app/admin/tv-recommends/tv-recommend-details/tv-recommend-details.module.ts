import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvRecommendDetailsComponent } from "./tv-recommend-details.component";
import { VideosService } from "../../../core/services/videos.service";



@NgModule({
  declarations: [
    TvRecommendDetailsComponent
  ],
  providers: [
    VideosService
  ],
  imports: [
    CommonModule
  ],
  exports: [TvRecommendDetailsComponent]
})
export class TvRecommendDetailsModule { }
