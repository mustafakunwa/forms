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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
