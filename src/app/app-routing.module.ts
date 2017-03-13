import { RadialComponent } from './charts/radial/radial.component';
import { FlotComponent } from './charts/flot/flot.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { fallbackRoute } from './fallback-route';
import { NgModule } from '@angular/core';
import { Routes, RouterModule,Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path: '', redirectTo:'/layout' , pathMatch: 'full'},
  { path: 'layout',
    component:LayoutComponent,
    children:[
        { path: '', redirectTo:'dashboard',pathMatch: 'full'},
        { path: 'dashboard', component:DashboardComponent},
        { path: 'cards', component:CardsComponent},
        { path: 'cards/:num', component:CardsComponent},
        { path: 'charts/flot', component:FlotComponent},
        { path: 'charts/radial', component:RadialComponent},
    ]
  },
  { path: 'login', component:LoginComponent},
  
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:true
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
