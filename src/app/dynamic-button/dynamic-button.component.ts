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
    switch (this.model.format) {
      case buttonFormat.primary:
        this.btnClass = 'primary-btn';
        break;
      case buttonFormat.secondary:
        this.btnClass = 'secondary-btn';
        break;
      case buttonFormat.tertiory:
        this.btnClass = 'tertiory-btn';
        break;
      case buttonFormat.link:
        this.btnClass = 'link-btn';
        break;
      default:
        this.btnClass = 'primary-btn';
    }
  }

 
}
