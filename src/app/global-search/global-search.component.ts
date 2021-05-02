import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
})
export class GlobalSearchComponent implements OnInit {
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

  searchResults: any[] = [];
  show = false;
  loading: boolean = false;
  searchTerm: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.search();
  }

  open() {
    this.show = true;
  }
  hide() {
    this.show = false;
  }
  clear() {
    this.searchTerm.reset();
  }

  search() {
    this.searchTerm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((res) => {
        this.searchResults = [];
        if (res?.length >= 3) {
          this.loading = true;
          this.open();
          setTimeout(() => {
            this.searchResults = this.data;
            this.loading = false;
          }, 2000);
        } else {
          this.hide();
        }
      });
  }

  routeToSelect(result) {
    this.clear();
    this.hide();
  }
}
