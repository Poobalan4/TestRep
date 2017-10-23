import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { AddComponent } from "./add/add-app.component";
import { DetailComponent } from "./details/detail.component";
import { DashboardComponent } from './details/dashboard.component';
import { FilterPipe } from './shared/filter.pipe';

import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AddComponent,
        DetailComponent,
        DashboardComponent,
        FilterPipe
    ],
    imports: [BrowserModule,
              FormsModule,
              ReactiveFormsModule,
              routing, 
              HttpModule,
              NvD3Module ],
    bootstrap: [AppComponent]
})
export class AppModule {

}