import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor() { }

  getRestaurantName(){
    return 'The Food Shop'
  }
}
