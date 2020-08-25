import {Component, OnInit, Input} from '@angular/core';
import {TvRecommendsModel} from "../models/tv-recommends.model";
import {TvRecommendsService} from 'src/app/core/services/tv-recommends.service';
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


  constructor(private tvRecommendsService: TvRecommendsService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.tvRecommend$ = this.tvRecommendsService.getTVRecommend(id);
    });
  }

}
