import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {MainComponent} from './main/main.component';
import {TvRecommendsModule} from "./tv-recommends/tv-recommends.module";


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TvRecommendsModule
  ]
})
export class AdminModule { }
