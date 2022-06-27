import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    CoreModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
