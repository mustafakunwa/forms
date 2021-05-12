import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSubscriptionComponent } from './plan-subscription.component';
import { CardModule } from '../card/card.module';
import { PlanCardComponent } from './plan-card/plan-card.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [PlanSubscriptionComponent, PlanCardComponent],
  exports: [PlanSubscriptionComponent],
  imports: [CommonModule, CardModule, ButtonModule],
})
export class PlanSubscriptionModule {}
