import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { GlobalSearchComponent } from './global-search/global-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
        { key: 'us', label: 'USA' },
      ],
    },
  ];

  searchResults: any[] = [];
  data = [
    {
      BASKET_ID: 4567812313297,
      SIM_NO: '123123121212313213132',
      MSISDN: '1132456454',
      SIM_STATUS: 'Available',
      SIM_IMSI: '1231231321321223123',
      BASKET_NAME: '12312312132132',
      BASKET_OWNER: '12345789787',
    },
    {
      BASKET_ID: 4567897,
      SIM_NO: '123123121212313213132',
      MSISDN: '1132456454',
      SIM_STATUS: 'Available',
      SIM_IMSI: '1231231321321223123',
      BASKET_NAME: '12312312132132',
      BASKET_OWNER: '12345789787',
    },
    {
      BASKET_ID: 4567897,
      SIM_NO: '123123121212313213132',
      MSISDN: '1132456454',
      SIM_STATUS: 'Available',
      SIM_IMSI: '1231231321321223123',
      BASKET_NAME: '12312312132132',
      BASKET_OWNER: '12345789787',
    },
    {
      BASKET_ID: 4567897,
      SIM_NO: '123123121212313213132',
      MSISDN: '1132456454',
      SIM_STATUS: 'Available',
      SIM_IMSI: '1231231321321223123',
      BASKET_NAME: '12312312132132',
      BASKET_OWNER: '12345789787',
    },
    {
      BASKET_ID: 4567897,
      SIM_NO: '123123121212313213132',
      MSISDN: '1132456454',
      SIM_STATUS: 'Available',
      SIM_IMSI: '1231231321321223123',
      BASKET_NAME: '12312312132132',
      BASKET_OWNER: '12345789787',
    },
    {
      BASKET_ID: 4567897,
      SIM_NO: '123123121212313213132',
      MSISDN: '1132456454',
      SIM_STATUS: 'Available',
      SIM_IMSI: '1231231321321223123',
      BASKET_NAME: '12312312132132',
      BASKET_OWNER: '12345789787',
    },
    {
      BASKET_ID: 4567897,
      SIM_NO: '123123121212313213132',
      MSISDN: '1132456454',
      SIM_STATUS: 'Available',
      SIM_IMSI: '1231231321321223123',
      BASKET_NAME: '12312312132132',
      BASKET_OWNER: '12345789787',
    },
    {
      BASKET_ID: 4567897,
      SIM_NO: '123123121212313213132',
      MSISDN: '1132456454',
      SIM_STATUS: 'Available',
      SIM_IMSI: '1231231321321223123',
      BASKET_NAME: '12312312132132',
      BASKET_OWNER: '12345789787',
    },
  ];
  loading: boolean = false;

  @ViewChild(GlobalSearchComponent) GlobalSearch: GlobalSearchComponent;
  getFields() {
    return this.fields;
  }

  getsearchResults() {
    this.searchResults = [];
    this.loading = true;
    setTimeout(() => {
      this.searchResults = this.data;
      this.loading = false;
    }, 2000);
  }

  routeToSelect(result) {
    this.GlobalSearch.clear();
    this.GlobalSearch.hide();
  }

  submit() {}
}
