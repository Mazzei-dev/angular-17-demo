import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WikiPage, WikiResponse } from '../models/wiki.model';

// https://www.mediawiki.org/wiki/API:Main_page/it

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  private baseUrl = "https://en.wikipedia.org/w/api.php"

  constructor(private httpClient: HttpClient) { }

  search(search: string): Observable<WikiPage[]> {
    const url = `${this.baseUrl}?action=opensearch&format=json&search=${search}&namespace=0&limit=10&formatversion=2&origin=*`;
    return this.httpClient.get(url)
    .pipe(
      map(records => {
        const rTyped = <WikiResponse>records;
        return rTyped[1].map((title, index) => {
          return {
            title,
            url: rTyped[3][index]
          }
        })
      }
    ))
  }
}
