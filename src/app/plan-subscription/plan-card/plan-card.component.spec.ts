import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PlanCardComponent } from './plan-card.component';

describe('PlanCardComponent', () => {
  let component: PlanCardComponent;
  let fixture: ComponentFixture<PlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCardComponent);
    component = fixture.componentInstance;
    component.plan = {
      price: 500,
      sms: 50000,
      days: 60,
    };
    fixture.detectChanges();
  });

  it('should have plan of 500 rupees', () => {
    let element = fixture.debugElement.query(By.css('.plan__pricing'));
    expect(element.nativeElement.innerHTML).toContain(500);
  });
  it('should have plan of 50000 sms', () => {
    let element = fixture.debugElement.query(By.css('.plan__sms'));
    expect(element.nativeElement.innerHTML).toContain(50000);
  });
  it('should have plan of 60 days', () => {
    let element = fixture.debugElement.query(By.css('.plan__validity'));
    expect(element.nativeElement.innerHTML).toContain(60);
  });
});
