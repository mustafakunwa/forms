import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../input/input.module';
import { MultiCheckboxModule } from '../multi-checkbox/multi-checkbox.module';
import { SelectModule } from '../select/select.module';
import { RadioModule } from '../radio/radio.module';

@NgModule({
  declarations: [FormBuilderComponent],
  exports: [FormBuilderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    MultiCheckboxModule,
    SelectModule,
    RadioModule,
  ],
})
export class FormBuilderModule {}
