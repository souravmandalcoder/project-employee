import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialLibraryModule } from './material-library.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialLibraryModule
  ],
  exports: [MaterialLibraryModule, FlexLayoutModule]
})
export class CoreModule { }
