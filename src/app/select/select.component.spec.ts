import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';
import { DynamicSelectModel } from '../models/select.model';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;

    component.model = new DynamicSelectModel({
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
      selectCountry: new FormControl(''),
    });
    fixture.detectChanges();
  });
});
