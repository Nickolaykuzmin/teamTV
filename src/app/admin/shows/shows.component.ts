import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TvRecommendsModel} from '../models/tv-recommends.model';
import {VideosService} from 'src/app/core/services/videos.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  public tvRecommends$: Observable<TvRecommendsModel[]>;

  constructor(private videosService: VideosService,) {
  }

  ngOnInit() {
    this.tvRecommends$ = this.videosService.getTVRecommends().pipe(
      map(shows => shows.slice(-10))
    );
  }
}
