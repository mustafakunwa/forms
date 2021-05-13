import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { FormsModule } from '@angular/forms';

import { CarouselComponent } from './carousel.component';
import { ValueServiceModule } from '../value-service/value-service.module';

@NgModule({
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
  imports: [CommonModule, NgxHmCarouselModule, FormsModule, ValueServiceModule],
})
export class CarouselModule {}
