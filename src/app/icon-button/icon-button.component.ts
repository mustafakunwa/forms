import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @Input() styles: object = { height: '50px', width: '50px' };
  @Input() icon: string;
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() {}

  ngOnInit(): void {}
}
