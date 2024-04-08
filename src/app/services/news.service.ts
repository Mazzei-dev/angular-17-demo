import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category, NewsResponse } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = "https://inshorts.deta.dev/news?category="

  constructor(private httpClient: HttpClient) { }

  getByCategory(category: Category): Observable<NewsResponse> {
    const url = `${this.baseUrl}${category}`;
    return this.httpClient.get(url)
    .pipe(
      map(records => {
        // todo type check
        return records as NewsResponse;
      }
    ))
  }
}
