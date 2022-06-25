import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminprojectComponent } from './adminproject.component';
import { AdminprojectRoutingModule } from './adminproject-routing.module';



@NgModule({
  declarations: [
    AdminprojectComponent
  ],
  imports: [
    CommonModule,
    AdminprojectRoutingModule
  ]
})
export class AdminprojectModule { }
