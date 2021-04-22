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
      value: '',
      required: true,
      hint:'Enter your First Name'
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
  ];

  getFields() {
    return this.fields;
  }
}
