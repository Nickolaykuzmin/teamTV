import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvRecommendsComponent } from "./tv-recommends.component";
import { VideosService } from "../../../core/services/videos.service";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TvRecommendsComponent
  ],
  providers: [
    VideosService
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [TvRecommendsComponent]
})
export class TvRecommendsModule { }
