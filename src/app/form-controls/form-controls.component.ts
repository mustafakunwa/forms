import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  dynamicCheckboxModel,
  singleCheckboxModel,
} from '../models/checkbox.model';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss'],
})
export class FormControlsComponent implements OnInit {
  checkboxmodel: dynamicCheckboxModel = new dynamicCheckboxModel({
    label: 'Gender',
    formControlName: 'gender',
    value: null,
    options: [
      {
        formControlName: 'male',
        label: 'Male',
      },
      {
        formControlName: 'female',
        label: 'Female',
      },
    ],
  });

  singleCheckbox: singleCheckboxModel = new singleCheckboxModel({
    label: 'Accept Terms and condition',
    formControlName: 'terms',
  });

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      gender: this.fb.group({
        male: this.fb.control(false),
        female: this.fb.control(false),
      }),
      terms: this.fb.control(false),
    });
  }
}
