import { FormControl } from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
} from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
})
export class GlobalSearchComponent implements OnInit {
  @Input() debounceTime: number = 200;
  @Input() searchResults: any[] = [];
  @Input() loading: boolean = false;
  @Input() minLength: number = 3;
  @Input() placholder: string = '';
  @Input() terms: string[] = [];
  @Output() getsearchResults: EventEmitter<any> = new EventEmitter<any>();
  @Output() goto: EventEmitter<any> = new EventEmitter<any>();
  @Input() closeOutsideClick: boolean = true;

  show = false;
  searchTerm: FormControl = new FormControl('');

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      if (this.closeOnOutsideClick) this.hide();
    } else {
      if (this.searchTerm.value?.length >= this.minLength) {
        this.open();
        this.getsearchResults.emit(this.searchTerm.value);
      }
    }
  }

  constructor(private eRef: ElementRef) {}

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
      .pipe(debounceTime(this.debounceTime), distinctUntilChanged())
      .subscribe((res) => {
        this.searchResults = [];
        if (res?.length >= this.minLength) {
          this.open();
          this.getsearchResults.emit(res);
        } else {
          this.hide();
        }
      });
  }

  select(result) {
    this.hide();
    this.clear();
    this.goto.emit(result);
  }
}
