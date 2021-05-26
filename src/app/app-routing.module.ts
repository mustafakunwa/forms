import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { UIComponent } from './ui/ui.component';
const routes: Routes = [
  {
    path: '',
    component: UIComponent,
  },
  {
    path: 'control',
    component: FormControlsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
