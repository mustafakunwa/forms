import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { UIComponent } from './ui/ui.component';
import { Sprint6Component } from './sprint6/sprint6.component';

const routes: Routes = [
  {
    path: '',
    component: UIComponent,
  },
  {
    path: 'control',
    component: FormControlsComponent,
  },
  {
    path: 'sprint6',
    component: Sprint6Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
