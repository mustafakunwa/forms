export class actionButton {
  type?: buttonType;
  disabled?: boolean;
  onClick?($event?: any): void;
}

export enum buttonType {
  primary,
  secondary,
  tertiory,
  link,
}
