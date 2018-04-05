import { ToasterModule } from 'angular2-toaster';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { Ng2PaginationModule } from 'ng2-pagination';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import {ToastyModule} from 'ng2-toasty';
import { NavigationService } from './navigation.service';
import { TwoWheelerComponent } from './two-wheeler/two-wheeler.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule, Ng2PaginationModule, ToastyModule.forRoot()],
  declarations: [AppComponent, HomeComponent, DashboardComponent,
    PageNotFoundComponent, NavigationComponent, LoginComponent, TwoWheelerComponent, LogoutComponent],
  providers: [NavigationService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
