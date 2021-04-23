import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.type = 'link';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('disable should be true', () => {
    component.disabled = true;
    expect(component.disabled).toBe(true);
  });

  it('disable should be false', () => {
    expect(component.disabled).toBe(false);
  });

  it('button type should not be null', () => {
    expect(component.btnClass).toBe('link-btn');
  });
});
