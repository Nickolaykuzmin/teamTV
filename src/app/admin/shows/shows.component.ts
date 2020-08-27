import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TvRecommendsModel } from '../models/tv-recommends.model';
import { VideosService } from 'src/app/core/services/videos.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  public tvRecommends$: TvRecommendsModel[] = [];

  constructor(private videosService: VideosService,) { }

  ngOnInit() {
    this.videosService.getTVRecommends().subscribe(res => {return this.tvRecommends$ = res});
    console.log('all', this.tvRecommends$);
  }
}
