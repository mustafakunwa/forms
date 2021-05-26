export interface menuConfig {
  id: string;
  path?: string;
  name: string;
  icon?: string;
  type: MenuType;
  children?: menuConfig[];
  active?: boolean;
}

export class Menu {
  id: string;
  path?: string;
  name: string;
  icon?: string;
  type: MenuType;
  children?: menuConfig[];
  active?: boolean;
  constructor(object: menuConfig) {
    this.id = object.id || undefined;
    this.path = MenuType.link == object.type ? object.path || '' : null;
    this.icon = object.icon;
    this.name = object.name;
    this.type = object.type;
    this.children =
      object.type == MenuType.childlink ? null : object.children || [];
    this.active = false;
  }
}

export enum MenuType {
  link = 'link',
  short = 'short',
  childlink = 'childlink',
}
