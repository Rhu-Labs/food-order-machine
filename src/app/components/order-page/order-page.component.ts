import { Component, OnInit } from '@angular/core';
import { MenuGroup } from 'src/app/models/menu-group';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  constructor(private appSettingsService: AppSettingsService, private menuService: MenuService) { }

  restaurantName: string = '';
  groupItems: MenuGroup[] = [];
  selectedGroupNumber: number = 0;
  selectedGroupName: string = '';

  ngOnInit(): void {
    this.restaurantName = this.appSettingsService.getRestaurantName();
    this.menuService.getGroups().subscribe((result) => {
      this.groupItems = result;
      this.selectedGroupNumber = this.groupItems[0].id;
      this.selectedGroupName = this.groupItems[0].name;
    });
    

  }

  groupSelected(thumbnailThatIsClicked: number) {
    this.selectedGroupNumber = thumbnailThatIsClicked;
    this.selectedGroupName = this.groupItems.find((gi) => gi.id == this.selectedGroupNumber)?.name || '';
  }
}


