import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinateFormPage } from './coordinate-form.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinateFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinateFormPageRoutingModule {}
