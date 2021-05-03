import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
})
export class GlobalSearchComponent implements OnInit {
  @Input() delay: number = 200;
  @Input() searchResults: any[] = [];
  @Input() loading: boolean = false;
  @Input() minLength: number = 3;
  @Input() placholder:string=""
  @Output() getsearchResults: EventEmitter<any> = new EventEmitter<any>();

  show = false;
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
      .pipe(debounceTime(this.delay), distinctUntilChanged())
      .subscribe((res) => {
        this.searchResults = [];
        if (res?.length >= this.minLength) {
          this.open();
          this.getsearchResults.emit();
        } else {
          this.hide();
        }
      });
  }
}
