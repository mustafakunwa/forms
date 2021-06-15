import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { CardModule } from '../card/card.module';
import { InputModule } from '../input/input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicButtonModule } from '../dynamic-button/dynamic-button.module';

@NgModule({
  declarations: [ChangePasswordComponent],
  exports: [ChangePasswordComponent],
  imports: [
    CommonModule,
    CardModule,
    InputModule,
    ReactiveFormsModule,
    DynamicButtonModule,
  ],
})
export class ChangePasswordModule {}
