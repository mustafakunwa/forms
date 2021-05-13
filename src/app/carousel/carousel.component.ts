import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() items: any;
  @Input() auto: boolean = false;
  @Input() interval: number = 3000;

  currentIndex = 1;
  speed = this.interval;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = false;

  constructor() {}

  ngOnInit(): void {}
}
