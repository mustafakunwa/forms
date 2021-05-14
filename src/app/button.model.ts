export class actionButton {
  label: string;
  type?: buttonType;
  disabled?: boolean;
  onClick?($event: any): void;
}

export enum buttonType {
  primary,
  secondary,
  tertiory,
  link,
}
