import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutModule } from './shared/default-layout/default-layout.module';
import { EmployeeModule } from './views/employee/employee.module';
import { HomeModule } from './views/home/home.module';
import { LoginModule } from './views/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './shared/components/toast/toast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastService } from './shared/services/toast.service';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { DialogService } from './shared/services/dialog.service';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [AppComponent, ToastComponent, DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DefaultLayoutModule,
    HomeModule,
    EmployeeModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ToastService, DialogService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
