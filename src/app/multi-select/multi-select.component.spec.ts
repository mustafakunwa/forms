import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSelectComponent } from './multi-select.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { DynamicMultiSelectModel } from '../models/multi-select.model';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiSelectComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    component.model = new DynamicMultiSelectModel({
      id: 'select_country',
      label: 'Country',
      options: [
        {
          id: 'india',
          label: 'India',
          value: 'india',
        },
        {
          id: 'uae',
          label: 'UAE',
          value: 'uae',
        },
        {
          id: 'usa',
          label: 'USA',
          value: 'usa',
        },
        {
          id: 'nepal',
          label: 'Nepal',
          value: 'nepal',
        },
      ],
      formControlName: 'selectCountry',
    });
    component.form = new FormGroup({
      selectCountry: new FormControl([]),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('List should not be opened', () => {
    let list = fixture.debugElement.query(By.css('.optionList'));
    expect(list).toBe(null);
  });

  it('List should be open', () => {
    fixture.debugElement
      .query(By.css('.multiSelectContainer'))
      .nativeElement.click();
    fixture.detectChanges();
    let list = fixture.debugElement.query(By.css('.optionList')).nativeElement;
    expect(list).not.toBe(null);
  });

  it('should select value', () => {
    fixture.debugElement
      .query(By.css('.multiSelectContainer'))
      .nativeElement.click();
    fixture.detectChanges();
    fixture.debugElement.query(By.css('#nepal')).nativeElement.click();
    fixture.detectChanges();
    expect(component.model.value).toContain('nepal');
  });
});
