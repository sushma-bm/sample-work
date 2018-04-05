import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { NavigationComponent } from './product/navigation/navigation.component';


@NgModule ({
   imports: [ BrowserModule, AppRoutingModule, HttpModule, FormsModule, Ng2PaginationModule],
   declarations: [ AppComponent, HomeComponent, ProductComponent, DashboardComponent,
     PageNotFoundComponent, ProductFormComponent, NavigationComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
