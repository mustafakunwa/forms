import { By } from '@angular/platform-browser';
import { element } from 'protractor';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { Menu, MenuType } from './menu.model';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    component.menus = [
      {
        path: '',
        id: 'dashboard',
        name: 'Dashboard',
        icon: '../../assets/images/dashboard.svg',
        type: MenuType.link,
      },
      {
        path: '',
        id: 'billing_payment',
        name: 'Billing Payment',
        icon: '../../assets/images/billing_payment.svg',
        type: MenuType.link,
      },

      {
        name: 'Help Support',
        id: 'help_support',
        type: MenuType.short,
      },
      {
        name: 'Request Service ',
        id: 'request_service',
        icon: '../../assets/images/billing_payment.svg',
        type: MenuType.childlink,
        children: [
          {
            path: '',
            id: 'request',
            name: 'Request',
            icon: '../../assets/images/billing_payment.svg',
            type: MenuType.link,
          },
        ],
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be collapse', () => {
    let element = fixture.debugElement.query(By.css('.sidebar__expanded'));
    expect(element).toBeFalsy();
  });

  it('should be Open', () => {
    fixture.debugElement
      .query(By.css('.sidebar__humburger-icon'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.sidebar__expanded'));
    expect(element).toBeTruthy();
  });

  it('should have same child as menu',()=>{
    let element=fixture.debugElement.queryAll(By.css('ul li'))
    expect(element.length).toBe(component.menus.length)
  })
});
