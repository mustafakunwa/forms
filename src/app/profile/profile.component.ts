import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() styles: object = { height: '100px', width: '100px' };
  @Input() classes:string;
  
  constructor() {}

  ngOnInit(): void {}
}
