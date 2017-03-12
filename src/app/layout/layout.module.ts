import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ChartsModule } from '../charts/charts.module';
import { Page1Component } from '../page1/page1.component';
import { Page2Component } from '../page2/page2.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CardsComponent } from '../cards/cards.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent,    
    Page1Component,
    Page2Component,
    DashboardComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,    
    ChartsModule,
  ],
  
})
export class LayoutModule { }
