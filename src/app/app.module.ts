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
import { DynamicButtonModule } from './dynamic-button/dynamic-button.module';
import { DialogModule } from './dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { UIComponent } from './ui/ui.component';
import { MultiCheckboxModule } from './multi-checkbox/multi-checkbox.module';
import { RadioModule } from './radio/radio.module';
import { SelectModule } from './select/select.module';
import { MultiSelectModule } from './multi-select/multi-select.module';
import { PopUpModule } from './pop-up/pop-up.module';
import { Sprint6Component } from './sprint6/sprint6.component';
import { TabsModule } from './library/tabs/tabs.module';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponentComponent,
    SidebarComponent,
    FormControlsComponent,
    UIComponent,
    Sprint6Component,
  ],
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
    SubscriptionPlanModule,
    DynamicButtonModule,
    DialogModule,
    MultiCheckboxModule,
    RadioModule,
    SelectModule,
    MultiSelectModule,
    PopUpModule,
    TabsModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponentComponent],
})
export class AppModule {}
