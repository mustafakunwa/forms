import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean=false;
  @Input() type: string;
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();

  btnClass = 'primary-btn';

  constructor() {}

  ngOnInit(): void {
    this.setButton();
  }

  setButton() {
    switch (this.type) {
      case 'primary':
        this.btnClass = 'primary-btn';
        break;
      case 'secondary':
        this.btnClass = 'secondary-btn';
        break;
      case 'tertiory':
        this.btnClass = 'tertiory-btn';
        break;
      case 'link':
        this.btnClass = 'link-btn';
        break;
      default:
        this.btnClass = 'primary-btn';
    }
  }
}
