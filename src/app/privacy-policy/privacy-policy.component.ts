import { actionButton, buttonFormat, buttonType } from './../button.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DynamicCheckboxModel } from './../models/checkbox.model';
import { DialogRef } from './../dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  acceptTerms: DynamicCheckboxModel = new DynamicCheckboxModel({
    id: '',
    label:
      'I have read all the Terms and Conditions, and agree to abide by the payment terms, usage guidelines and regulations mentioned herein.',
    formControlName: 'terms',
  });

  ageeButton: actionButton = new actionButton({
    disabled: true,
    format: buttonFormat.primary,
    onClick: this.agreed.bind(this),
    type: buttonType.button,
  });

  form: FormGroup;

  constructor(public dialogRef: DialogRef, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      terms: this.fb.control(false),
    });

    this.form.controls.terms.valueChanges.subscribe((res) => {
      this.ageeButton.disabled = !res;
    });
  }

  agreed() {
    this.dialogRef.close(this.form.value.terms);
  }
}
