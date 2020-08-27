import {Component, OnInit} from '@angular/core';
import {TvRecommendsModel} from "../../models/tv-recommends.model";
import {VideosService} from 'src/app/core/services/videos.service';
import {ActivatedRoute} from '@angular/router';

import {Observable} from "rxjs";

@Component({
  selector: 'app-tv-recomend-details',
  templateUrl: './tv-recommend-details.component.html',
  styleUrls: ['./tv-recommend-details.component.scss']
})
export class TvRecommendDetailsComponent implements OnInit {

  public tvRecommend$: Observable<TvRecommendsModel>;


  constructor(private videosService: VideosService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.tvRecommend$ = this.videosService.getTVRecommend(id);
    });
  }

}
