export class menu {
  path?: string;
  name: string;
  icon?: string;
  type: menuType;
  children?: menu[];
  active?: boolean;
  constructor(object: menu) {
    this.path = menuType.link == object.type ? object.path || '' : null;
    this.icon = object.icon;
    this.name = object.name;
    this.type = object.type;
    this.children =
      object.type == menuType.childlink ? null : object.children || [];
    this.active = object.active || false;
  }
}

export enum menuType {
  link = 'link',
  short = 'short',
  childlink = 'childlink',
}
