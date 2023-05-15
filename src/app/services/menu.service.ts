import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MenuGroup } from '../models/menu-group';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private httpClient: HttpClient) { }

  getGroups(): Observable<MenuGroup[]> {
    return this.httpClient.get<MenuGroup[]>('assets/mockData/menu-groups.json')
      .pipe(map(res => res));
  }

  getItemsByGroup(groupId: number): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>('assets/mockData/menu-items.json')
      .pipe(
        map(res => res.filter(item => item.groupId === groupId))
      );
  }
}
