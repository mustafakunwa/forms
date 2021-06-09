import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { DialogModule } from '../dialog/dialog.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiCheckboxModule } from '../multi-checkbox/multi-checkbox.module';
import {DynamicButtonModule} from '../dynamic-button/dynamic-button.module';

@NgModule({
  declarations: [PrivacyPolicyComponent],
  exports: [PrivacyPolicyComponent],
  entryComponents: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    DialogModule,
    ReactiveFormsModule,
    MultiCheckboxModule,
    DynamicButtonModule
  ],
})
export class PrivacyPolicyModule {}
