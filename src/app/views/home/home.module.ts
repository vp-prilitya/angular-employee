import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ComponentsModule],
})
export class HomeModule {}
