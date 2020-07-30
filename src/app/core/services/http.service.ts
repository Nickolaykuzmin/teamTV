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

  get<T>(url: string, headers?: HttpHeaders, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(url, {headers, params});
  }

  post<T>(url: string, body: any, headers: HttpHeaders, params?: HttpParams) {
    this,this.httpClient.post<T>(url, body, {headers, params})
  }
}
