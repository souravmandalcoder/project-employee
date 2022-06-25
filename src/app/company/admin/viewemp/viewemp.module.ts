import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewempComponent } from './viewemp.component';
import { ViewempRoutingModule } from './viewemp-routing.module';



@NgModule({
  declarations: [
    ViewempComponent
  ],
  imports: [
    CommonModule,
    ViewempRoutingModule
  ]
})
export class ViewempModule { }
