import { Component, OnInit } from '@angular/core';
import { Menu, MenuType } from './menu.model';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  open: boolean = false;

  tooltip: any = {
    style: {
      visibility: 'hidden',
      opacity: 0,
      display: 'none',
    },
  };

  isActive: string = 'Dashboard';

  menus: Menu[] = [
    {
      path: '',
      id: '',
      name: 'Dashboard',
      icon: '../../assets/images/dashboard.svg',
      type: MenuType.link,
    },
    {
      path: '',
      id: '',
      name: 'Billing Payment',
      icon: '../../assets/images/billing_payment.svg',
      type: MenuType.link,
    },
    {
      path: '',
      id: '',
      name: 'Circuit',
      icon: '../../assets/images/dashboard.svg',
      type: MenuType.link,
    },
    {
      path: '',
      id: '',
      name: 'Service Request',
      icon: '../../assets/images/billing_payment.svg',
      type: MenuType.link,
    },
    {
      name: 'Help Support',
      id: '',
      type: MenuType.short,
    },
    {
      name: 'Service Child ',
      id: '',
      icon: '../../assets/images/billing_payment.svg',
      type: MenuType.childlink,
      children: [
        {
          path: '',
          id: '',
          name: 'Service Request',
          icon: '../../assets/images/billing_payment.svg',
          type: MenuType.link,
        },
        {
          path: '',
          id: '',
          name: 'Service Request',
          icon: '../../assets/images/billing_payment.svg',
          type: MenuType.link,
        },
      ],
    },
    {
      path: '',
      id: '',
      name: 'Value Added Service',
      icon: '../../assets/images/billing_payment.svg',
      type: MenuType.link,
    },

    {
      path: '',
      id: '',
      name: 'Service Request Requets asfasfasf',
      icon: '../../assets/images/billing_payment.svg',
      type: MenuType.link,
    },

    {
      path: '',
      id: '',
      name: 'Service Request Requets asfasfasf',
      icon: '../../assets/images/billing_payment.svg',
      type: MenuType.link,
    },

    {
      path: '',
      id: '',
      name: 'Service Request Requets asfasfasf',
      icon: '../../assets/images/billing_payment.svg',
      type: MenuType.link,
    },

    {
      path: '',
      id: '',
      name: 'Service Request Requets asfasfasf',
      icon: '../../assets/images/billing_payment.svg',
      type: MenuType.link,
    },
    {
      path: '',
      id: '',
      name: 'Service Request Requets asfasfasf',
      icon: '../../assets/images/billing_payment.svg',
      type: MenuType.link,
    },
  ];

  constructor() {}

  mouseover(event, name) {
    var { top, left, height, width } =
      event.currentTarget.getBoundingClientRect();
    this.tooltip = {
      style: {
        visibility: 'visible',
        opacity: 1,
        display: 'block',
        left: `${left + width}px`,
        top: `${top + height / 2}px`,
      },
      name,
    };
  }

  mouseLeave() {
    this.tooltip = {
      style: {
        visibility: 'hidden',
        opacity: 0,
        display: 'none',
      },
    };
  }

  menuToggle(name) {
    let index = this.menus.findIndex((menu) => menu.name == name);
    let menu = { ...this.menus[index] };
    let toggle = !menu.active;
    menu.active = toggle;
    this.menus[index] = menu;
  }
  ngOnInit(): void {}
}
