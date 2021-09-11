import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinateListPageRoutingModule } from './coordinate-list-routing.module';

import { CoordinateListPage } from './coordinate-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinateListPageRoutingModule
  ],
  declarations: [CoordinateListPage]
})
export class CoordinateListPageModule {}
