import { Component, OnInit, Input } from '@angular/core';
import { TvRecommendsModel } from "../models/tv-recommends.model";
import { TvRecommendsService } from 'src/app/core/services/tv-recommends.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tv-recomend-datails',
  templateUrl: './tv-recommend-datails.component.html',
  styleUrls: ['./tv-recommend-datails.component.scss']
})
export class TvRecommendDatailsComponent implements OnInit {

  @Input() tvItem:TvRecommendsModel;

  public tvRecommend$: TvRecommendsModel[] = [];


  constructor( private tvRecommendsService: TvRecommendsService,) { }

  ngOnInit() {
    this.tvRecommendsService
    .getTVRecommends()
    .pipe(
      map( (res:TvRecommendsModel) => {
        console.log("data", res);
        console.log('it', this.tvItem);
      })
    ).subscribe(item => console.log("res", item));
  }

}
