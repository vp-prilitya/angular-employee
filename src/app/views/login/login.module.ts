import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
})
export class LoginModule {}
