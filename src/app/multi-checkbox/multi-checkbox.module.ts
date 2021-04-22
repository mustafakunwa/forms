import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiCheckboxComponent } from './multi-checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MultiCheckboxComponent],
  exports: [MultiCheckboxComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class MultiCheckboxModule {}
