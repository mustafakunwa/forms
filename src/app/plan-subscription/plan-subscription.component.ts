import { Component, OnInit, HostListener } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plan-subscription',
  templateUrl: './plan-subscription.component.html',
  styleUrls: ['./plan-subscription.component.scss'],
})
export class PlanSubscriptionComponent implements OnInit {
  plan = {
    price: 499,
    sms: 20000,
    days: 30,
  };

  showNavigationArrows = true;
  showNavigationIndicators = true;
  items: number = 5;

  cards:any[]=[1,2,3,4,5,7,8,9]

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 400) this.items = 1;
    else if (window.innerWidth < 600) this.items = 2;
    else if (window.innerWidth < 900) this.items = 3;
    else if (window.innerWidth < 1200) this.items = 4;
    else if (window.innerWidth < 1500) this.items = 5;
    else this.items = 6;
  }

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {
    this.onResize('')
  }

  getSlideCount(){
    return Math.ceil(36/this.items)
  }
}
