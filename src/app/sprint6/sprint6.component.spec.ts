import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sprint6Component } from './sprint6.component';

describe('Sprint6Component', () => {
  let component: Sprint6Component;
  let fixture: ComponentFixture<Sprint6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sprint6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sprint6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
