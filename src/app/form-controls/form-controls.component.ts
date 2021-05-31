import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DynamicCheckboxModel } from '../models/checkbox.model';
import { DynamicRadioModel } from '../models/radio.model';
import { DynamicSelectModel } from '../models/select.model';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss'],
})
export class FormControlsComponent implements OnInit {
  checkboxmodel: DynamicCheckboxModel = new DynamicCheckboxModel({
    id: '',
    label: 'Country',
    formControlName: 'country',
    value: null,
    isMultiSelect: true,
    options: [
      {
        formControlName: 'india',
        label: 'India',
        id: 'india',
      },
      {
        formControlName: 'dubai',
        label: 'Dubai',
        id: 'dubai',
      },
    ],
  });

  singleCheckbox: DynamicCheckboxModel = new DynamicCheckboxModel({
    id: '',
    label: 'Accept Terms and condition',
    formControlName: 'terms',
  });

  radioButon: DynamicRadioModel = new DynamicRadioModel({
    formControlName: 'gender',
    label: 'Gender',
    id: '',
    options: [
      { label: 'Male', value: 'male', id: 'male' },
      { label: 'Female', value: 'female', id: 'female' },
    ],
  });

  selectElement: DynamicSelectModel = new DynamicSelectModel({
    id: 'select_country',
    label: 'Country',
    options: [
      {
        id: 'india',
        label: 'India',
        value: 'india',
      },
      {
        id: 'uae',
        label: 'UAE',
        value: 'uae',
      },
      {
        id: 'usa',
        label: 'USA',
        value: 'usa',
      },
      {
        id: 'nepal',
        label: 'Nepal',
        value: 'nepal',
      },
    ],
    formControlName: 'selectCountry',
  });
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      country: this.fb.group({
        india: this.fb.control(false),
        dubai: this.fb.control(false),
      }),
      terms: this.fb.control(false),
      gender: this.fb.control(''),
      selectCountry: this.fb.control({ value: '' }, [Validators.required]),
    });
  }


}
