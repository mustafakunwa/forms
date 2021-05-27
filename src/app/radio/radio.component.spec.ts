import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioComponent } from './radio.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DynamicRadioModel } from '../models/radio.model';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadioComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    component.model = new DynamicRadioModel({
      formControlName: 'gender',
      label: 'Gender',
      id: 'gender',
      options: [
        { label: 'Male', value: 'male', id: 'male' },
        { label: 'Female', value: 'female', id: 'female' },
      ],
    });
    component.form = new FormGroup({
      gender: new FormControl(''),
    });
    fixture.detectChanges();
  });

  it('should create Radio container', () => {
    let element = fixture.debugElement.query(By.css('#gender')).nativeElement;
    expect(element.innerHTML).toContain('Gender');
  });

  it('should create 2 options', () => {
    let element = fixture.debugElement
      .query(By.css('#gender'))
      .queryAll(By.css('div'));
    expect(element.length).toBe(2);
  });

  it('should enable male in radio', () => {
    fixture.debugElement.query(By.css('#male')).nativeElement.click();
    fixture.detectChanges();
    expect(component.model.value).toBe('male');
  });
});
