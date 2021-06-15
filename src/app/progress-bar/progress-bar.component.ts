import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() value: number;
  @Input() total: number = 100;

  width: string;
  constructor() {}

  ngOnInit(): void {
    this.width = (this.value * 100) / this.total +'%';
  }
}
