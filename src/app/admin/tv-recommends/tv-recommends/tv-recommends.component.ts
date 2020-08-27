import {Component, OnInit} from '@angular/core';
import {VideosService} from "../../../core/services/videos.service";
import {TvRecommendsModel} from "../models/tv-recommends.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-tv-recommends',
  templateUrl: './tv-recommends.component.html',
  styleUrls: ['./tv-recommends.component.scss']
})
export class TvRecommendsComponent implements OnInit {
  public tvRecommend$: Observable<TvRecommendsModel>;
  private readonly RECOMMEND_ID = 6771;

  constructor(
    private router: Router,
    private videosService: VideosService,
  ) {
  }

  ngOnInit(): void {
    this.tvRecommend$ = this.videosService.getTVRecommend(this.RECOMMEND_ID);
  }

  postData(body) {
    this.videosService.postTVRecommend(body).subscribe(res => console.log(res));
  }

  // getLastVideos(){
  //   this.tvRecommend$
  //   .pipe(
  //     map(res => { console.log(res)  })
  //   )
  //   .subscribe(res => console.log('second', res))
  // }

  onEdit(tvRecommend: TvRecommendsModel) {
    return this.router.navigate(['/admin', 'main', tvRecommend.id]);
  }

}
