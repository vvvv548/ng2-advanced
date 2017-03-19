import { CalenderComponent } from './calender/calender.component';
import { NeedLoginGuard } from './need-login.guard';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { fallbackRoute } from './fallback-route';
import { NgModule } from '@angular/core';
import { Routes, RouterModule,Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/calender', pathMatch: 'full' },
      { path: 'calender', component: CalenderComponent},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'cards/:num', component: CardsComponent },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule',
       canActivate: [NeedLoginGuard] }
    ]
  },
  { path: 'login', component:LoginComponent},
  
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
