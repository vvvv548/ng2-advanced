import { NeedLoginGuard } from './need-login.guard';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { CalenderContentComponent } from './calender-content/calender-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,  
    LoginComponent,  
    DashboardComponent,
    CardsComponent,
    Page1Component,
    Page2Component,
    CalenderComponent,
    CalenderContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NeedLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
