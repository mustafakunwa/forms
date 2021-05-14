import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { actionButton, buttonType } from '../button.model';

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
    this.setButton();
  }

  setButton() {
    switch (this.model.type) {
      case buttonType.primary:
        this.btnClass = 'primary-btn';
        break;
      case buttonType.secondary:
        this.btnClass = 'secondary-btn';
        break;
      case buttonType.tertiory:
        this.btnClass = 'tertiory-btn';
        break;
      case buttonType.link:
        this.btnClass = 'link-btn';
        break;
      default:
        this.btnClass = 'primary-btn';
    }
  }
}
