import { Component, OnInit, Input } from '@angular/core';

enum headerType {
  default = 'default',
  warning = 'warning',
  success = 'success',
}

@Component({
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.scss'],
})
export class DialogHeaderComponent implements OnInit {
  @Input() type: headerType = headerType.default;
  @Input() message: string = '';
  @Input() iconPath: string = null;
  constructor() {}

  ngOnInit(): void {}
}
