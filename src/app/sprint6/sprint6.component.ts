import { actionButton, buttonFormat, buttonType } from './../button.model';
import { DialogService } from './../dialog/dialog.service';
import { Component, OnInit } from '@angular/core';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-sprint6',
  templateUrl: './sprint6.component.html',
  styleUrls: ['./sprint6.component.scss'],
})
export class Sprint6Component implements OnInit {
  isOpen: boolean = false;
  isChangePasswordOpen: boolean = false;

  primaryButton: actionButton = new actionButton({
    disabled: false,
    format: buttonFormat.primary,
    onClick: this.submit.bind(this),
    type: buttonType.button,
  });

  passwordButton: actionButton = new actionButton({
    disabled: false,
    format: buttonFormat.primary,
    onClick: this.openChangePassword.bind(this),
    type: buttonType.button,
  });

  constructor(private dialog: DialogService) {}

  ngOnInit(): void {}

  submit(y) {
    const dialogIns = this.dialog.open(PrivacyPolicyComponent, {
      height: '100vh',
      width: '100vw',
    });

    dialogIns?.afterClosed.subscribe((res) => {
      if (res) {
        //do something
      }
    });
  }

  openChangePassword() {
    this.isChangePasswordOpen = true;
  }
}
