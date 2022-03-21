import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Portfolio } from '../common/portfolio';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private baseUrl = 'http://localhost:8080/api/portfolios';

  constructor(private httpClient: HttpClient) {}

  getPortfolioList(): Observable<Portfolio[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.portfolios));
  }
}

interface GetResponse {
  _embedded: {
    portfolios: Portfolio[];
  };
}
