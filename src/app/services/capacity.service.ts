import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapacityService {
  constructor() { }

  // this service will be used to get the capacity of the venue. 0 means there are no more tables available.
  getCapacity() {
    return Math.floor(Math.random() * 6);
  }
}
