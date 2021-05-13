import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPlanComponent } from './subscription-plan.component';
import { CarouselModule } from '../carousel/carousel.module';

@NgModule({
  declarations: [SubscriptionPlanComponent],
  exports: [SubscriptionPlanComponent],
  imports: [CommonModule, CarouselModule],
})
export class SubscriptionPlanModule {}
