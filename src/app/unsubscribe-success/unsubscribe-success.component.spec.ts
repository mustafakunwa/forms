import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeSuccessComponent } from './unsubscribe-success.component';

describe('UnsubscribeSuccessComponent', () => {
  let component: UnsubscribeSuccessComponent;
  let fixture: ComponentFixture<UnsubscribeSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribeSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
