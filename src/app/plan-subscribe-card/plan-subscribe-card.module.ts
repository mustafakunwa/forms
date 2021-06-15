import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSubscribeCardComponent } from './plan-subscribe-card.component';

import { CardModule } from '../card/card.module';
import { DynamicButtonModule } from '../dynamic-button/dynamic-button.module';
import { BadgeComponent } from './badge/badge.component';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';

@NgModule({
  declarations: [PlanSubscribeCardComponent, BadgeComponent],
  exports: [PlanSubscribeCardComponent],
  imports: [CommonModule, CardModule, DynamicButtonModule, ProgressBarModule],
})
export class PlanSubscribeCardModule {}
