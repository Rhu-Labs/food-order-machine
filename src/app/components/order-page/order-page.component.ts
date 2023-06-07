import { Component, OnInit } from '@angular/core';
import { MenuGroup } from 'src/app/models/menu-group';
import { MenuItem } from 'src/app/models/menu-item';
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
  selectedGroup: MenuGroup = new MenuGroup(0, '', '');
  menuItemsInGroup: MenuItem[] = [];

  ngOnInit(): void {
    this.restaurantName = this.appSettingsService.getRestaurantName();
    this.menuService.getGroups().subscribe((result) => {
      this.groupItems = result;
      this.selectedGroup = this.groupItems[0];
      this.menuService.getItemsByGroup(this.selectedGroup.id).subscribe((result) => {
        this.menuItemsInGroup = result;
      });
    });
  }

  groupSelected(thumbnailThatIsClicked: MenuGroup) {
    this.selectedGroup = thumbnailThatIsClicked;
    
    this.menuService.getItemsByGroup(this.selectedGroup.id).subscribe((result) => {
      this.menuItemsInGroup = result;
    });
  }
}


