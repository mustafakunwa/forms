import { GlobalSearchComponent } from './../global-search/global-search.component';
import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() isOpenChange: EventEmitter<any> = new EventEmitter();

  searchResults: any[] = [];
  data = [
    {
      name: 'Wal-Mart India Private Limited',
    },
    {
      name: 'Barclays Bank PLC',
    },
    {
      name: 'GLOBAL HEALTH PATLIPUTRA PRIVATE LIMITED',
    },
    {
      name: 'Wal-Mart India Private Limited',
    },
    {
      name: 'Barclays Bank PLC',
    },
    {
      name: 'GLOBAL HEALTH PATLIPUTRA PRIVATE LIMITED',
    },
    {
      name: 'Wal-Mart India Private Limited',
    },
    {
      name: 'Barclays Bank PLC',
    },
    {
      name: 'GLOBAL HEALTH PATLIPUTRA PRIVATE LIMITED',
    },
    {
      name: 'Wal-Mart India Private Limited',
    },
    {
      name: 'Barclays Bank PLC',
    },
    {
      name: 'GLOBAL HEALTH PATLIPUTRA PRIVATE LIMITED',
    },
  ];
  loading: boolean = false;
  @ViewChild(GlobalSearchComponent) globalSearch: GlobalSearchComponent;
  constructor() {}

  ngOnInit(): void {}

  close() {
    this.isOpenChange.emit(!this.isOpen);
  }

  getsearchResults(searchterm) {
    this.searchResults = [];
    this.loading = true;
    this.searchResults = this.data.filter((item) =>
      item.name.includes(searchterm)
    );
    this.loading = false;
  }

  routeTo(result) {
    this.globalSearch.clear();
    this.globalSearch.hide();
  }
}
