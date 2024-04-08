import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Fruit } from '../models/fruit.model';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  private baseUrl = "https://www.fruityvice.com";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Fruit[]> {
    const url = `${this.baseUrl}/api/fruit/all`;
    return this.httpClient.get(url)
    .pipe(
      map(records => {
        // todo type check
        return records as Fruit[];
      }
    ))
  }
}
