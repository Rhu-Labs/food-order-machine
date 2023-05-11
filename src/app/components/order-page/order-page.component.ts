import { Component, OnInit } from '@angular/core';
import { SideBarMenu } from 'src/app/models/side-bar-menu';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  constructor(private AppSettingsService: AppSettingsService) { }

  restaurantName: string = '';
  datas: SideBarMenu[] = [];
  selectedGroup: string = '';

  ngOnInit(): void {
    this.restaurantName = this.AppSettingsService.getRestaurantName()
    this.datas = [
      new SideBarMenu('../../../assets/images/Burger Logo.png', 'Burgers'),
      new SideBarMenu('../../../assets/images/Pizza Logo.jpg', 'Pizzas'),
      new SideBarMenu('../../../assets/images/Desserts Logo.jpg', 'Desserts')
    ];

    this.selectedGroup = this.datas[0].groupType
  }

  groupSelected(thumbnailThatIsClicked:string) {
    this.selectedGroup = thumbnailThatIsClicked ;
  }

}


