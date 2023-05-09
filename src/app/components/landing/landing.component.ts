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

  currentCapacity: number = 0;

  ngOnInit(): void {
    this.currentCapacity = this.capacityService.getCapacity();
  }
}
