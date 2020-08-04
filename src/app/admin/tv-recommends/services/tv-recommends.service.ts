import {Injectable} from '@angular/core';
import {HttpService} from "../../../core/services/http.service";
import {TvRecommendsModel} from "../models/tv-recommends.model";
import {Observable} from "rxjs";
import { HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvRecommendsService {
  BASE_API_TV_URL = 'https://api.tvmaze.com';
  API_TV_GET_RECOMMENDS = `${this.BASE_API_TV_URL}/shows/6771`;

  constructor(
    private httpService: HttpService
  ) {
  }


  getTVRecommends(): Observable<TvRecommendsModel> {
    return this.httpService.get<TvRecommendsModel>(this.API_TV_GET_RECOMMENDS)
  }

  postTVRecommends(body: any): Observable<any> {
    return this.httpService.post<Observable<HttpEvent<any>>>(this.API_TV_GET_RECOMMENDS, body);
  }
}
