import { Component, OnInit } from '@angular/core';
import {TvRecommendsService} from "./services/tv-recommends.service";
import {TvRecommendsModel} from "./models/tv-recommends.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tv-recommends',
  templateUrl: './tv-recommends.component.html',
  styleUrls: ['./tv-recommends.component.scss']
})
export class TvRecommendsComponent implements OnInit  {
  public tvRecommend$: Observable<TvRecommendsModel>;

  constructor(private tvRecommendsService: TvRecommendsService) { }

  ngOnInit(): void {
    this.tvRecommend$ = this.tvRecommendsService.getTVRecommends();
  }

}
