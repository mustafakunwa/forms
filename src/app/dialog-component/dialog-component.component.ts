import { actionButton, buttonFormat, buttonType } from './../button.model';
import { Component, OnInit } from '@angular/core';
import { DialogRef } from '../dialog/dialog-refs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss'],
})
export class DialogComponentComponent implements OnInit {
  primaryButton: actionButton = new actionButton({
    disabled: false,
    format: buttonFormat.primary,
    onClick: this.subscribe.bind(this),
    type: buttonType.button,
  });

  constructor(private dialogRef: DialogRef, private router: Router) {}

  ngOnInit(): void {}

  subscribe(event?: any) {
    this.dialogRef.close();
  }
}
