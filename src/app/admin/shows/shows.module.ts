import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsComponent } from "../shows/shows.component";
import { VideosService } from 'src/app/core/services/videos.service';


@NgModule({
  declarations: [
    ShowsComponent
  ],
  providers: [
    VideosService
  ],
  imports: [
    CommonModule
  ],
  exports: [ShowsComponent]
})
export class ShowsModule { }
