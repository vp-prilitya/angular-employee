import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [CommonModule, ComponentsModule, AppRoutingModule],
})
export class DefaultLayoutModule {}
