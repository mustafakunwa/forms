import { actionButton, buttonFormat, buttonType } from './../button.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicInputModel } from '../models/input.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() isOpenChange: EventEmitter<any> = new EventEmitter();

  email: DynamicInputModel = new DynamicInputModel({
    id: 'email',
    label: 'Email ID',
    placeholder: 'Email ID',
    inputType: 'email',
    formControlName: 'email',
  });

  newPassword: DynamicInputModel = new DynamicInputModel({
    id: 'newPassword',
    label: 'New Password',
    placeholder: 'New Password',
    inputType: 'password',
    formControlName: 'newPassword',
  });

  confirmPassword: DynamicInputModel = new DynamicInputModel({
    id: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
    inputType: 'password',
    formControlName: 'confirmPassword',
  });

  submitButton: actionButton = new actionButton({
    disabled: true,
    format: buttonFormat.primary,
    onClick: this.submit.bind(this),
    type: buttonType.button,
  });

  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: this.fb.control(null),
      newPassword: this.fb.control(null),
      confirmPassword: this.fb.control(null),
    });
  }

  close() {
    this.isOpenChange.emit(!this.isOpen);
  }

  submit(){

  }
}
