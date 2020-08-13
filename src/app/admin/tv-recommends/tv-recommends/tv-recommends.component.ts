import { Component, OnInit } from '@angular/core';
import { TvRecommendsService } from "../../../core/services/tv-recommends.service";
import { TvRecommendsModel } from "../models/tv-recommends.model";
import { UserService } from "../../../core/services/user.service"
import { Observable } from "rxjs";
import { AlertService } from 'src/app/core/services/alert.service';


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
    console.log(this.tvRecommendsService.postTVRecommends(body));

    return this.tvRecommendsService.postTVRecommends(body).subscribe(res => console.log(res));
  }

}
