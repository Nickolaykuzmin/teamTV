import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpMethod = HttpMethod;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getMethod<T>(url: string, headers?: HttpHeaders, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(url, {headers, params});
  }

  postMethod(headers: HttpHeaders, data: any) {

  }
}
