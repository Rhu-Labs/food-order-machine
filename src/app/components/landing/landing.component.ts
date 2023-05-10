import { NgClass } from '@angular/common';
import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CapacityService } from 'src/app/services/capacity.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(private capacityService: CapacityService) {
  }
  restaurantName: string = '';
  welcomeDescription: string = '';
  beginMessage: string = '';
  currentCapacity: number = 0;
  capacityMessage: string = '';
  orderIsDisabled: boolean = false

  ngOnInit(): any {
    this.currentCapacity = this.capacityService.getCapacity();
    this.capacityMessage = this.oneOrZeroSeat();
    this.orderIsDisabled = this.disabledButton();
    this.restaurantName = 'The Food Shop';
    this.welcomeDescription = 'Welcome to ThisFoodApp, the easiest and fastest way to order your favorite food. With ThisFoodApp, you can browse menus, customize your orders, pay securely, and get your food in minutes';
    this.beginMessage = "Let's begin!";
  }

  oneOrZeroSeat(): string {
    let currentCapacityInBox = this.currentCapacity;
    if (currentCapacityInBox === 0)
      return 'There are no tables available';
    else if (currentCapacityInBox === 1)
      return 'There is 1 table available';
    else
      return `There are ${this.currentCapacity} tables available`;
  }

  disabledButton(): boolean {
    return this.currentCapacity === 0
  }

}