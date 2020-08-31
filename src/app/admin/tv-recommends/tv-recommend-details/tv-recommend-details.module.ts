import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvRecommendDetailsComponent } from "./tv-recommend-details.component";
import { VideosService } from "../../../core/services/videos.service";
import {AdminModule} from "../../admin.module";



@NgModule({
  declarations: [
    TvRecommendDetailsComponent
  ],
  providers: [
    VideosService
  ],
    imports: [
        CommonModule,
        AdminModule
    ],
  exports: [TvRecommendDetailsComponent]
})
export class TvRecommendDetailsModule { }
