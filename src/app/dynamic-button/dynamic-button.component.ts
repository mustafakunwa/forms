import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { actionButton, buttonFormat, buttonType } from '../button.model';

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.scss'],
})
export class DynamicButtonComponent implements OnInit {
  @Input() model: actionButton;

  btnClass = 'primary-btn';

  constructor() {}

  ngOnInit(): void {
    this.setButtonClass();
  }

  setButtonClass() {
    this.btnClass = this.model.format
      ? `${this.model.format}-btn`
      : this.btnClass;
  }
}
