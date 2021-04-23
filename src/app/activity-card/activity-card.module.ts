import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityCardComponent } from './activity-card.component';
import { ActivityHeaderComponent } from './activity-header/activity-header.component';
import { ActivityBodyComponent } from './activity-body/activity-body.component';
@NgModule({
  declarations: [ActivityCardComponent, ActivityHeaderComponent, ActivityBodyComponent],
  exports: [ActivityCardComponent,ActivityHeaderComponent, ActivityBodyComponent],
  imports: [CommonModule],
})
export class ActivityCardModule {}
