import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSubscribeCardComponent } from './plan-subscribe-card.component';

describe('PlanSubscribeCardComponent', () => {
  let component: PlanSubscribeCardComponent;
  let fixture: ComponentFixture<PlanSubscribeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanSubscribeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSubscribeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
