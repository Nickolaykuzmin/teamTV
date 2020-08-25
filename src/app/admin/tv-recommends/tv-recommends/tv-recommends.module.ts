import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvRecommendsComponent } from "./tv-recommends.component";
import { TvRecommendsService } from "../../../core/services/tv-recommends.service";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TvRecommendsComponent
  ],
  providers: [
    TvRecommendsService
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [TvRecommendsComponent]
})
export class TvRecommendsModule { }
