import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-service',
  templateUrl: './value-service.component.html',
  styleUrls: ['./value-service.component.scss'],
})
export class ValueServiceComponent implements OnInit {
  @Input() service: any;
  constructor() {}

  ngOnInit(): void {}
}
