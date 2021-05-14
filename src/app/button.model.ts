export class actionButton {
  format?: buttonFormat;
  type?: buttonType;
  disabled?: boolean;
  onClick?($event?: any): void;

  constructor(object: actionButton) {
    this.disabled = object.disabled || false;
    this.onClick = object.onClick;
    this.format = object.format || buttonFormat.primary;
    this.type = object.type || buttonType.button;
  }
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
