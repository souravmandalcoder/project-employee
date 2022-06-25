import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpprojectComponent } from './empproject.component';
import { EmpprojectRoutingModule } from './empproject-routing.module';



@NgModule({
  declarations: [
    EmpprojectComponent
  ],
  imports: [
    CommonModule,
    EmpprojectRoutingModule
  ]
})
export class EmpprojectModule { }
