import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { TvRecommendsService } from "../../../core/services/tv-recommends.service";
import { TvRecommendsModel } from "../models/tv-recommends.model";
import { UserService } from "../../../core/services/user.service"
import { Observable } from "rxjs";
import { AlertService } from 'src/app/core/services/alert.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-tv-recommends',
  templateUrl: './tv-recommends.component.html',
  styleUrls: ['./tv-recommends.component.scss']
})
export class TvRecommendsComponent implements OnInit  {
  public tvRecommend$: Observable<TvRecommendsModel>;

  constructor(
    private tvRecommendsService: TvRecommendsService,
    private userService: UserService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.tvRecommend$ = this.tvRecommendsService.getTVRecommends();
  }

  postData(body) {
    this.tvRecommendsService.postTVRecommend(body).subscribe(res => console.log(res));
  }

  getLastVideos(){
    this.tvRecommend$
    .pipe(
      map(res => { console.log(res)  })
    )
    .subscribe(res => console.log('second', res))
  }

}
