import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from './pop-up.component';
import { GlobalSearchModule } from '../global-search/global-search.module';

@NgModule({
  declarations: [PopUpComponent],
  exports: [PopUpComponent],
  imports: [CommonModule,GlobalSearchModule ],
})
export class PopUpModule {}
