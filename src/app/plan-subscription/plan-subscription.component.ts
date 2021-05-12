import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
