import { HttpClient } from '@angular/common/http';
import { Quote } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Home } from '../common/home';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private baseUrl = 'http://localhost:8080/api/quotes';

  constructor(private httpClient: HttpClient) {}

  getQuote(theQuoteId: number): Observable<Home> {
    const quoteUrl = `${this.baseUrl}/${theQuoteId}`;
    return this.httpClient.get<Home>(quoteUrl);
  }
}
