import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiCheckboxComponent } from './multi-checkbox.component';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { DynamicCheckboxModel } from '../models/checkbox.model';

describe('MultiCheckboxComponent', () => {
  let component: MultiCheckboxComponent;
  let fixture: ComponentFixture<MultiCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiCheckboxComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCheckboxComponent);
    component = fixture.componentInstance;

    component.model = new DynamicCheckboxModel({
      id: 'country',
      label: 'Country',
      formControlName: 'country',
      value: null,
      isMultiSelect: true,
      options: [
        {
          formControlName: 'india',
          label: 'India',
          id: 'india',
        },
        {
          formControlName: 'dubai',
          label: 'Dubai',
          id: 'dubai',
        },
      ],
    });
    component.form = new FormGroup({
      country: new FormGroup({
        india: new FormControl(false),
        dubai: new FormControl(false),
      }),
    });

    fixture.detectChanges();
  });

  it('should create checkbox container', () => {
    let element = fixture.debugElement.query(By.css('#country')).nativeElement;
    expect(element.innerHTML).toContain('Country');
  });

  it('should create 2 options', () => {
    let element = fixture.debugElement.queryAll(By.css('.checkbox'));
    expect(element.length).toBe(2);
  });

  it('should add value to checkbox', () => {
    fixture.debugElement.query(By.css('#india')).nativeElement.click();
    fixture.detectChanges();
    expect(component.model.value).toContain('India');
  });
});
