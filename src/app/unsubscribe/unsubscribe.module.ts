import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsubscribeComponent } from './unsubscribe.component';
import { CardModule } from '../card/card.module';
import { DynamicButtonModule } from '../dynamic-button/dynamic-button.module';
import { SelectModule } from '../select/select.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UnsubscribeComponent],
  exports: [UnsubscribeComponent],
  imports: [
    CommonModule,
    CardModule,
    DynamicButtonModule,
    SelectModule,
    ReactiveFormsModule,
  ],
})
export class UnsubscribeModule {}
