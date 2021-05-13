import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueServiceComponent } from './value-service.component';

describe('ValueServiceComponent', () => {
  let component: ValueServiceComponent;
  let fixture: ComponentFixture<ValueServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
