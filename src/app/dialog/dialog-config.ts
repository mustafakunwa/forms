export class DialogConfig<D = any> {
    data?: D;
    disableClose?: boolean = false;
  
    constructor(obj: DialogConfig) {
      this.data = obj.data;
      this.disableClose = obj.disableClose || false;
    }
  }
  