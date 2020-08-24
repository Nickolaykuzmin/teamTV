import { Component, OnInit, Input } from '@angular/core';
import { TvRecommendsModel } from "../models/tv-recommends.model";
import { TvRecommendsService } from 'src/app/core/services/tv-recommends.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Key } from 'protractor';

@Component({
  selector: 'app-tv-recomend-datails',
  templateUrl: './tv-recommend-datails.component.html',
  styleUrls: ['./tv-recommend-datails.component.scss']
})
export class TvRecommendDatailsComponent implements OnInit {

  @Input() tvItem:TvRecommendsModel;

  public tvRecommend$: TvRecommendsModel[];

  constructor( private tvRecommendsService: TvRecommendsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
       this.tvRecommendsService.getTVRecommend(params.get('id')).subscribe(res =>{
          console.log(res);
          this.tvRecommend$.push(res);
      })
      });
  }

}
