import { actionButton, buttonFormat, buttonType } from './../button.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unsubscribe-success',
  templateUrl: './unsubscribe-success.component.html',
  styleUrls: ['./unsubscribe-success.component.scss']
})
export class UnsubscribeSuccessComponent implements OnInit {


  homeButton: actionButton = new actionButton({
    format: buttonFormat.primary,
    onClick: this.submit.bind(this),
    type: buttonType.button,
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit(){}

}
