import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-activity-header',
  templateUrl: './activity-header.component.html',
  styleUrls: ['./activity-header.component.scss']
})
export class ActivityHeaderComponent implements OnInit {
  @Input() color: string;
  constructor() { }

  ngOnInit(): void {
  }

}
