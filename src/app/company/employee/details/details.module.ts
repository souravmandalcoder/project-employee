import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    CoreModule
  ]
})
export class DetailsModule { }
