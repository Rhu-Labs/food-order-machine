import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private httpClient: HttpClient) { }

  getGroups(): Observable<MenuGroup[]> {
    return this.httpClient.get<MenuGroup[]>('assets/data/select-github-repos.json')
    .pipe(map(res => res));
  }
}
