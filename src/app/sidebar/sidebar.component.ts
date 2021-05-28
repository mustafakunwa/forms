import { Component, OnInit } from '@angular/core';
import { Menu, MenuType } from './menu.model';
import { SidebarService } from './sidebar.service';

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

  menus: Menu[] = [];

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.getMenu().subscribe((res) => {
      this.menus = res;
    });
  }

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
