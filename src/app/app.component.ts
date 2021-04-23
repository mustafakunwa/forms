import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fields: any[] = [
    {
      type: 'text',
      key: 'firstName',
      label: 'First Name',
      value: 'Mustafa',
      required: true,
      placeholder: 'Enter your First Name',
      errorMessage: { required: 'FirstName is required' },
    },
    {
      type: 'text',
      key: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      inputType: 'text',
      key: 'email',
      label: 'Email',
      value: '',
      required: true,
    },

    {
      type: 'checkbox',
      key: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' },
      ],
    },

    {
      type: 'dropdown',
      key: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ]
    },
  ];

  getFields() {
    return this.fields;
  }

  submit(){}
}
