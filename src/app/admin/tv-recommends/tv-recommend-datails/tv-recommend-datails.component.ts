import {Component, OnInit, Input} from '@angular/core';
import {TvRecommendsModel} from "../models/tv-recommends.model";
import {VideosService} from 'src/app/core/services/videos.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Key} from 'protractor';
import {Observable} from "rxjs";

@Component({
  selector: 'app-tv-recomend-datails',
  templateUrl: './tv-recommend-datails.component.html',
  styleUrls: ['./tv-recommend-datails.component.scss']
})
export class TvRecommendDatailsComponent implements OnInit {

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
