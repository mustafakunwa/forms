import { ActivityBodyComponent } from './activity-card/activity-body/activity-body.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderModule } from './form-builder/form-builder.module';
import { CardModule } from './card/card.module';
import { ProfileModule } from './profile/profile.module';
import { ButtonModule } from './button/button.module';
import { IconButtonModule } from './icon-button/icon-button.module';
import { ActivityCardModule } from './activity-card/activity-card.module';
import { LoaderModule } from './loader/loader.module';
import { GlobalSearchModule } from './global-search/global-search.module';
import { PlanSubscriptionModule } from './plan-subscription/plan-subscription.module';
import { ValueServiceModule } from './value-service/value-service.module';
import { SubscriptionPlanModule } from './subscription-plan/subscription-plan.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FormBuilderModule,
    CardModule,
    ProfileModule,
    ButtonModule,
    IconButtonModule,
    ActivityCardModule,
    LoaderModule,
    GlobalSearchModule,
    PlanSubscriptionModule,
    ValueServiceModule,
    SubscriptionPlanModule 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
