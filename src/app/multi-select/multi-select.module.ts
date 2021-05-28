import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MultiSelectComponent],
  exports: [MultiSelectComponent],
  imports: [CommonModule,ReactiveFormsModule],
})
export class MultiSelectModule {}
