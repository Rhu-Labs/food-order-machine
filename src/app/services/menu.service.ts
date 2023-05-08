import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MenuGroup } from '../models/menu-group';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private httpClient: HttpClient) { }

  getGroups(): Observable<MenuGroup[]> {
    return this.httpClient.get<MenuGroup[]>('assets/mockData/menu-groups.json')
    .pipe(map(res => res));
  }
}
