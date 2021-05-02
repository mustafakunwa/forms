import { By } from '@angular/platform-browser';
import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { GlobalSearchComponent } from './global-search.component';

describe('GlobalSearchComponent', () => {
  let component: GlobalSearchComponent;
  let fixture: ComponentFixture<GlobalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalSearchComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dont have search card', fakeAsync(() => {
    component.search();
    component.searchTerm.setValue('12');
    fixture.detectChanges();
    tick(Infinity);
    let element = fixture.debugElement
      .query(By.css('div'))
      .query(By.css('.search__result'));
    expect(element).toBeFalsy();
  }));

  it('should have search card', fakeAsync(() => {
    component.search();
    component.searchTerm.setValue('1213');
    fixture.detectChanges();
    tick(Infinity);
    let element = fixture.debugElement
      .query(By.css('div'))
      .query(By.css('.search__result'));
    expect(element).toBeFalsy();
  }));

  it('should show No result Found', () => {
    component.open();
    component.searchResults = [];
    fixture.detectChanges();
    let element = fixture.debugElement
      .query(By.css('div'))
      .query(By.css('.search__result')).nativeElement;
    expect(element.innerHTML).toContain('No Result');
  });
});
