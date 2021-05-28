import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Menu } from './menu.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private menus: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);

  constructor() {}

  updateMenu(menus: Menu[]): void {
    this.menus.next(menus);
  }
  getMenu(): Observable<Menu[]> {
    return this.menus;
  }
}
