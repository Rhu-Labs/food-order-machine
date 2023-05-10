import { Component, OnInit } from '@angular/core';
import { SideBarMenu } from 'src/app/models/side-bar-menu';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
side: any;
  constructor(private AppSettingsService: AppSettingsService) { }

  restaurantName: string = '';
  datas: SideBarMenu[] = [];


  ngOnInit(): void {
    this.restaurantName = this.AppSettingsService.getRestaurantName()
    this.datas = [
      new SideBarMenu('logohere', 'Burgers'),
      new SideBarMenu('logohere', 'Pizzas'),
      new SideBarMenu('logohere', 'Desserts')
    ]
  }
}
