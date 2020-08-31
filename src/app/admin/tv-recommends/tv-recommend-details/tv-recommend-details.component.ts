import {Component, OnDestroy, OnInit} from '@angular/core';
import {TvRecommendsModel} from "../../models/tv-recommends.model";
import {VideosService} from 'src/app/core/services/videos.service';
import {ActivatedRoute} from '@angular/router';

import {Observable, Subject, Subscription} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-tv-recomend-details',
  templateUrl: './tv-recommend-details.component.html',
  styleUrls: ['./tv-recommend-details.component.scss']
})
export class TvRecommendDetailsComponent implements OnInit, OnDestroy {
  public tvRecommend$: Observable<TvRecommendsModel>;
  public destroy$: Subject<void> = new Subject<void>();

  constructor(private videosService: VideosService, private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const id = +params.get('id');
      this.tvRecommend$ = this.videosService.getTVRecommend(id);
    });
  }

  ngOnDestroy() {
  }

}
