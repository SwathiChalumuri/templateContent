import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Template1Component } from './template1/template1.component';
import { TemplatereuseComponent } from './templatereuse/templatereuse.component';
import { Content1Component } from './content1/content1.component';
import { Container1Component } from './container1/container1.component';
import { TempOutletComponent } from './temp-outlet/temp-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    Template1Component,
    TemplatereuseComponent,
    Content1Component,
    Container1Component,
    TempOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
