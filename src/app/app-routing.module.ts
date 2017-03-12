import { LoginComponent } from './login/login.component';
import { fallbackRoute } from './fallback-route';
import { NgModule } from '@angular/core';
import { Routes, RouterModule,Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path: '', redirectTo:'login' , pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  { path: 'layout', component:LayoutComponent},
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
