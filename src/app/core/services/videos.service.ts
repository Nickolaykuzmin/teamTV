import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {TvRecommendsModel} from "./../../admin/models/tv-recommends.model";
import {Observable} from "rxjs";
import {HttpEvent} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  BASE_API_TV_URL = 'https://api.tvmaze.com';
  API_TV_GET_RECOMMENDS = `${this.BASE_API_TV_URL}/shows`;

  constructor(
    private httpService: HttpService
  ) {
  }

  getTVRecommends(): Observable<TvRecommendsModel[]> {
    return this.httpService.get<TvRecommendsModel[]>(this.API_TV_GET_RECOMMENDS);
  }

  getTVRecommend(itemId: number): Observable<TvRecommendsModel> {
    return this.httpService.get<TvRecommendsModel>(this.API_TV_GET_RECOMMENDS + `/${itemId}`);
  }

  postTVRecommend(body: any): Observable<any> {
    return this.httpService.post<Observable<HttpEvent<any>>>(this.API_TV_GET_RECOMMENDS, body);
  }
}
