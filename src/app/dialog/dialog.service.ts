import { Router } from '@angular/router';
import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  Type,
} from '@angular/core';
import { DialogModule } from './dialog.module';
import { DialogComponent } from './dialog.component';
import { DialogConfig } from './dialog-config';
import { DialogInjector } from './dialog-injector';
import { DialogRef } from './dialog-refs';

@Injectable({
  providedIn: DialogModule,
})
export class DialogService {
  dialogComponentRef: ComponentRef<DialogComponent>;
  isOpen: boolean = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private router: Router
  ) {}

  public open(componentType: Type<any>, config: DialogConfig): DialogRef {
    if (!this.isOpen) {
      this.isOpen = true;
      const dialogRef = this.appendDialogComponentToBody(config);

      this.dialogComponentRef.instance.childComponentType = componentType;

      return dialogRef;
    }
  }

  private appendDialogComponentToBody(config: DialogConfig): DialogRef {
    const map = new WeakMap();
    map.set(DialogConfig, config);

    const dialogRef = new DialogRef();
    map.set(DialogRef, dialogRef);

    const sub = dialogRef.afterClosed.subscribe(() => {
      // close the dialog
      this.isOpen = false;
      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(
      new DialogInjector(this.injector, map)
    );
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;

    this.dialogComponentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody();
    });

    this.router.events.subscribe((event) => {
      dialogRef.close();
    });

    return dialogRef;
  }

  private removeDialogComponentFromBody(): void {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }
}
