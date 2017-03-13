import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadialComponent } from './radial/radial.component';
import { FlotComponent } from './flot/flot.component';

const routes: Routes = [{
   path: 'charts',    
   children:[
        { path:'flot',component:FlotComponent},
        { path:'radial', component:RadialComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChartsRoutingModule { }
