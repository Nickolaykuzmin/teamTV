import { Component, OnInit } from '@angular/core';
import {TvRecommendsService} from "./services/tv-recommends.service";
import {TvRecommendsModel} from "./models/tv-recommends.model";
import { UserService } from "../../core/services/user.service"
import {Observable} from "rxjs";
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

    this.tvRecommendsService.postTVRecommends(body),
    error => {
      const errorMessage = this.userService.getErrorSignInMessage(error.code);
      this.alertService.errorMessage(errorMessage, 'Something went wrong', {timeOut: 1000});
    }
  }

}
