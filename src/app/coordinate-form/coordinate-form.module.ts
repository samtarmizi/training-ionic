import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinateFormPageRoutingModule } from './coordinate-form-routing.module';

import { CoordinateFormPage } from './coordinate-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinateFormPageRoutingModule
  ],
  declarations: [CoordinateFormPage]
})
export class CoordinateFormPageModule {}
