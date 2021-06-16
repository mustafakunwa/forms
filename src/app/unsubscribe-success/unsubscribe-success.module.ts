import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsubscribeSuccessComponent } from './unsubscribe-success.component';

import {CardModule} from '../card/card.module';
import {DynamicButtonModule} from '../dynamic-button/dynamic-button.module';

@NgModule({
  declarations: [UnsubscribeSuccessComponent],
  exports: [UnsubscribeSuccessComponent],
  imports: [
    CommonModule,
    CardModule,
    DynamicButtonModule
  ]
})
export class UnsubscribeSuccessModule { }
