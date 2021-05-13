import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueServiceComponent } from './value-service.component';
import { CardModule } from '../card/card.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [ValueServiceComponent],
  exports: [ValueServiceComponent],
  imports: [CommonModule, CardModule, ButtonModule],
})
export class ValueServiceModule {}
