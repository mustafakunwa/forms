import { actionButton, buttonFormat, buttonType } from './../button.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-subscribe-card',
  templateUrl: './plan-subscribe-card.component.html',
  styleUrls: ['./plan-subscribe-card.component.scss']
})
export class PlanSubscribeCardComponent implements OnInit {

  upgradeButton: actionButton = new actionButton({
    format: buttonFormat.primary,
    onClick: this.upgrade.bind(this),
    type: buttonType.button,
  });

  unsubscribeButton: actionButton = new actionButton({
    format: buttonFormat.link,
    onClick: this.unsubscribe.bind(this),
    type: buttonType.button,
  });
  constructor() { }

  ngOnInit(): void {
  }

  unsubscribe (){}

  upgrade(){}

}
