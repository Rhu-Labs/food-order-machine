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

  currentCapacity: number = 0;
  capacityMessage: string = '';
  orderIsDisabled: boolean = false

  ngOnInit(): any {
    this.currentCapacity = this.capacityService.getCapacity();
    this.capacityMessage = this.oneOrZeroSeat();
    this.orderIsDisabled = this.disabledButton();

  }

  oneOrZeroSeat(): string {
    let currentCapacityInBox = this.currentCapacity;
    if (currentCapacityInBox === 0)
      return 'There are no tables available';
    else if (currentCapacityInBox === 1)
      return 'there is 1 table available';
    else
      return `There are ${this.currentCapacity} tables available`;
  }

  disabledButton(): boolean {
    return this.currentCapacity === 0
  }

}