import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { InsertionDirective } from './insertion.directive';


@NgModule({
  declarations: [DialogComponent, InsertionDirective],
  entryComponents: [DialogComponent],
  imports: [
    CommonModule
  ]
})
export class DialogModule { }
