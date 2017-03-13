import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { FlotComponent } from './flot/flot.component';
import { RadialComponent } from './radial/radial.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FlotComponent,
    RadialComponent
  ]
})
export class ChartsModule { }
