import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeRoutingModule } from './employee.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeComponent,
    CreateEmployeeComponent,
    ViewEmployeeComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    EmployeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class EmployeeModule {}
