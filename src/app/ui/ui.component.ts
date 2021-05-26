import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GlobalSearchComponent } from '../global-search/global-search.component';
import { actionButton, buttonFormat, buttonType } from '../button.model';
import { DialogService } from '../dialog/dialog.service';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UIComponent implements OnInit {
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
      value: '',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' },
      ],
    },
    {
      type: 'radio',
      key: 'gender',
      label: 'Gender',
      value: '',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' },
      ],
    },
  ];

  searchResults: any[] = [];
  data = [
    {
      BASKET_ID: 123,
      Name: 'MSISDN number lies in account 1-43245622',
    },
    {
      BASKET_ID: 1234,
      Name: 'MSISDN number lies in account 1-15264787',
    },
    {
      BASKET_ID: 1233,
      Name: 'MSISDN number lies in account 1-123456',
    },
  ];
  loading: boolean = false;
  terms: string[] = ['BASKET_ID', 'Name'];

  service: any = {
    banner: '../assets/images/Web Banner.png',
    logo: '../assets/images/location.svg',
    service: 'Location Service',
    description: 'One word for description',
    amount: 499,
    feature: [
      'Basic Benifits: Discription 1: Onliner detail will be better',
      'Basic Benifits: Discription 1: Onliner detail will be better',
      'Basic Benifits: Discription 1: Onliner detail will be better',
      'Basic Benifits: Discription 1: Onliner detail will be better',
    ],
    button: 'Explore Now',
  };
  @ViewChild(GlobalSearchComponent) globalSearch: GlobalSearchComponent;

  primaryButton: actionButton = new actionButton({
    disabled: false,
    format: buttonFormat.primary,
    onClick: this.submit.bind(this),
    type: buttonType.button,
  });

  constructor(private dialog: DialogService) {}

  ngOnInit() {}
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

  routeTo(result) {
    this.globalSearch.clear();
    this.globalSearch.hide();
  }

  submit(event?: any) {
    const dialogIns = this.dialog.open(DialogComponentComponent, {
      data: { message: 'SMS Box  ' },
    });

    dialogIns?.afterClosed.subscribe((res) => {});
  }
}