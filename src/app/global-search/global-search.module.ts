import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSearchComponent } from './global-search.component';
import {ReactiveFormsModule} from '@angular/forms'
import {LoaderModule} from '../loader/loader.module';

@NgModule({
  declarations: [GlobalSearchComponent],
  exports: [GlobalSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderModule
  ]
})
export class GlobalSearchModule { }
