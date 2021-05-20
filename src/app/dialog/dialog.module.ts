import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { InsertionDirective } from './insertion.directive';
import { DialogHeaderComponent } from './dialog-header/dialog-header.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { DialogFooterComponent } from './dialog-footer/dialog-footer.component';

@NgModule({
  declarations: [
    DialogComponent,
    InsertionDirective,
    DialogHeaderComponent,
    DialogBodyComponent,
    DialogFooterComponent,
  ],
  entryComponents: [DialogComponent],
  imports: [CommonModule],
  exports: [DialogHeaderComponent, DialogBodyComponent, DialogFooterComponent],
})
export class DialogModule {}
