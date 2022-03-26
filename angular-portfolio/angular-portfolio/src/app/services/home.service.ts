import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Home } from '../common/home';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private baseUrl = 'http://localhost:8080/api/quotes';

  constructor(private httpClient: HttpClient) {}

  getQuotesList(): Observable<Home[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.quotes));
  }
}

interface GetResponse {
  _embedded: {
    quotes: Home[];
  };
}
