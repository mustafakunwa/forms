import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicButtonComponent } from './dynamic-button.component';



@NgModule({
  declarations: [DynamicButtonComponent],
  exports: [DynamicButtonComponent],
  imports: [
    CommonModule
  ]
})
export class DynamicButtonModule { }
