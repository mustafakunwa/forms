import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../input/input.module';

@NgModule({
  declarations: [FormBuilderComponent],
  exports: [FormBuilderComponent],
  imports: [CommonModule, ReactiveFormsModule, InputModule],
})
export class FormBuilderModule {}
