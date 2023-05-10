import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  constructor(private AppSettingsService: AppSettingsService)
{}

restaurantName: string = '';

ngOnInit(): void {
  this.restaurantName = this.AppSettingsService.getRestaurantName()
}

}
