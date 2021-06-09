import {
  Component,
  Type,
  OnDestroy,
  AfterViewInit,
  ComponentRef,
  ViewChild,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { InsertionDirective } from './insertion.directive';
import { DialogRef } from './dialog-refs';
import { DialogConfig } from './dialog-config';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  componentRef: ComponentRef<any>;
  childComponentType: Type<any>;

  @ViewChild(InsertionDirective) insertionPoint: InsertionDirective;

  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private dialogRef: DialogRef,
    public DialogConfig: DialogConfig
  ) {}

  ngAfterViewInit(): void {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent): void {
    if (!this.DialogConfig.disableClose) {
      this.dialogRef.close();
    }
  }

  onDialogClicked(evt: MouseEvent): void {
    evt.stopPropagation();
  }

  loadChildComponent(componentType: Type<any>): void {
    let componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  close(): void {
    this._onClose.next();
  }
}
