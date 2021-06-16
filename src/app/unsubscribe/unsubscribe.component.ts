import { actionButton, buttonFormat, buttonType } from './../button.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicSelectModel } from './../models/select.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss'],
})
export class UnsubscribeComponent implements OnInit {
  selectReason: DynamicSelectModel = new DynamicSelectModel({
    id: 'select_reason',
    label: 'Reason',
    options: [
      {
        id: 'no_longer_required',
        label: 'Service is no longer required',
        value: 'no_longer_required',
      },
      {
        id: 'no_longer_required',
        label: 'Service is no longer required',
        value: 'no_longer_required',
      },
    ],
    formControlName: 'reason',
  });

  submitButton: actionButton = new actionButton({
    format: buttonFormat.primary,
    onClick: this.submit.bind(this),
    type: buttonType.button,
  });

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      reason: this.fb.control([], [Validators.required]),
    });
  }

  submit(){}
}
