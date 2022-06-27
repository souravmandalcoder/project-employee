import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminprojectComponent } from './adminproject.component';
import { AdminprojectRoutingModule } from './adminproject-routing.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    AdminprojectComponent
  ],
  imports: [
    CommonModule,
    AdminprojectRoutingModule,
    CoreModule
  ]
})
export class AdminprojectModule { }
