export class DialogConfig<D = any> {
  data?: D;
  disableClose?: boolean = false;
  height?: string;
  width?: string;

  constructor(obj: DialogConfig) {
    this.data = obj.data;
    this.disableClose = obj.disableClose || false;
    this.height = obj.height || undefined;
    this.width = obj.width || undefined;
  }
}
