import {Injectable} from '@angular/core';
import {HttpService} from "../../../core/services/http.service";
import {TvRecommendsModel} from "../models/tv-recommends.model";
import {Observable} from "rxjs";

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
    return this.httpService.getMethod<TvRecommendsModel>(this.API_TV_GET_RECOMMENDS)
  }
}
