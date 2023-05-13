import { Component, OnInit } from '@angular/core';
import { CapacityService } from 'src/app/services/capacity.service';
import { Router } from '@angular/router';
import { AppSettingsService } from 'src/app/services/app-settings.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(private capacityService: CapacityService, private router: Router, private appSettingService: AppSettingsService) {
  }
  restaurantName: string = '';
  welcomeDescription: string = '';
  beginMessage: string = '';
  currentCapacity: number = 0;
  capacityMessage: string = '';
  orderIsDisabled: boolean = false;

  ngOnInit(): any {
    this.currentCapacity = this.capacityService.getCapacity();
    this.capacityMessage = this.setCapacityMessage();
    this.orderIsDisabled = this.disabledButton();
    this.restaurantName = this.appSettingService.getRestaurantName();
    this.welcomeDescription = 'Welcome! the easiest and fastest way to order your favorite food. With ThisFoodApp, you can browse menus, customize your orders, pay securely, and get your food in minutes';
    this.beginMessage = "Let's begin!";

  }

  setCapacityMessage(): string {
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

  goToOrderPage() {
    this.router.navigate(['/order']);
  }
}
