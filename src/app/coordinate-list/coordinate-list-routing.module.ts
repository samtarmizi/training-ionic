import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinateListPage } from './coordinate-list.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinateListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinateListPageRoutingModule {}
