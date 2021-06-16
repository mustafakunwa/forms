import { FormControl } from '@angular/forms';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  show = false;
  searchTerm: FormControl = new FormControl('');
  placholder: string = 'Search Basket | MSISDN | SIM Number';
  debounceTime: number = 200;
  searchResults: any[] = [];
  minLength: number = 3;
  loading: boolean = false;
  isFocused: boolean = false;

  @HostListener('document:click', ['$event'])
  handleOnFocus(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.isFocused = true;
    }
  }

  constructor(private eRef: ElementRef) {}

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.searchTerm.valueChanges
      .pipe(debounceTime(this.debounceTime), distinctUntilChanged())
      .subscribe((res) => {
        if (res?.length >= this.minLength) {
          this.open();
          this.getData(res);
        } else {
          this.hide();
        }
      });
  }

  getData(searchTerm) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.searchResults = [1, 2, 3];
    }, 2000);
  }

  open() {
    this.show = true;
  }
  hide() {
    this.show = false;
  }
  clear() {
    this.searchTerm.reset();
    this.searchResults=[];
  }

  cancel(){
    this.hide();
    this.clear();
    this.isFocused=false
  }

  onSelect(item){
    this.hide();
    this.clear(); 
    this.isFocused=false
  }
}
