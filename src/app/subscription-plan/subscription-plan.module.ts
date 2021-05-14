import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPlanComponent } from './subscription-plan.component';
import { CarouselModule } from '../carousel/carousel.module';
import { ValueServiceModule } from '../value-service/value-service.module';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [SubscriptionPlanComponent],
  exports: [SubscriptionPlanComponent],
  imports: [CommonModule, CarouselModule, ValueServiceModule, CardModule],
})
export class SubscriptionPlanModule {}
