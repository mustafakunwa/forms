export class actionButton {
  format?: buttonFormat;
  type?: buttonType;
  disabled?: boolean;
  onClick?($event?: any): void;
}

export enum buttonFormat {
  primary = 'primary',
  secondary = 'secondary',
  tertiory = 'tertiory',
  link = 'link',
}

export enum buttonType {
  submit = 'submit',
  reset = 'reset',
  button = 'button',
}
