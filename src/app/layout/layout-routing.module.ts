import { RadialComponent } from './../charts/radial/radial.component';
import { FlotComponent } from './../charts/flot/flot.component';
import { ChartsModule } from './../charts/charts.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from '../page2/page2.component';
import { Page1Component } from '../page1/page1.component';
import { CardsComponent } from '../cards/cards.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
   {path: '', redirectTo: 'layout', pathMatch: 'full'},
   {path: 'layout',
   component:LayoutComponent,
   children:[
        { path: '', redirectTo:'dashboard',pathMatch: 'full'},
        { path: 'dashboard', component:DashboardComponent},
        { path: 'page1',  component:Page1Component  },
        { path: 'page2',  component:Page2Component  },        
        { path: 'cards', component:CardsComponent},
        { path: 'cards/:num', component:CardsComponent},
        { path: 'charts/flot',component:FlotComponent},
        { path: 'charts/radial', component:RadialComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LayoutRoutingModule { }
